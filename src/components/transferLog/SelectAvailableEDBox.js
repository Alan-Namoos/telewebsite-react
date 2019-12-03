import React, { useContext } from 'react';
import { BoxListContext } from '../../contexts/BoxListContext';
import sortBy from 'lodash/sortBy';
import { Card } from 'react-bootstrap';

const SelectAvailableEDBox = ({ boxNumber, handleChange }) => {
	const { boxList } = useContext(BoxListContext);
	const boxesInED =
		boxList.length > 0 ? `${boxList.length} availabe in ED` : 'No boxes availabe in ED';
	return (
		<>
			<Card className='mb-2'>
				<Card.Body>
					<Card.Title>Box Number: </Card.Title>
					<Card.Text></Card.Text>
					<div className='form-group'>
						{/* <input
							type='text'
							className='form-control'
							id='boxNumber'
							name='boxNumber'
							required
							value={boxNumber}
							onChange={handleChange}
						/> */}
						<select
							value={boxNumber}
							onChange={handleChange}
							className='form-control'
							id='boxNumber'
							name='boxNumber'
							required
						>
							<option value=''>{boxesInED}</option>
							{sortBy(boxList, ['number']).map((box, i) => {
								return (
									<option key={box.number} value={box.number}>
										T {box.number}
									</option>
								);
							})}
						</select>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default SelectAvailableEDBox;
