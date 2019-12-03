import React from 'react';
import sortBy from 'lodash/sortBy';
import { Card } from 'react-bootstrap';

const SelectToRoom = ({ toRoom, handleChange, selectedFloor, floorRooms }) => {
	return (
		<Card className='mb-2'>
			<Card.Body>
				<Card.Title>To Room:</Card.Title>
				<div className='form-group'>
					<select
						value={toRoom}
						onChange={handleChange}
						type='text'
						className='form-control'
						id='toRoom'
						name='toRoom'
						required
					>
						<option value=''>{selectedFloor} Floor Rooms</option>
						{/* <option value="">Select Floor Room</option> */}
						{sortBy(floorRooms, ['number']).map((room, i) => {
							return (
								<option key={room} value={room}>
									{room}
								</option>
							);
						})}
					</select>
				</div>
			</Card.Body>
		</Card>
	);
};

export default SelectToRoom;
