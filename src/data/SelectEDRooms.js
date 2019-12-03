import React from 'react';
import { Card } from 'react-bootstrap';
const SelectEDRooms = ({ handleChange, fromRoom }) => {
	return (
		<>
			<Card className='mb-2'>
				<Card.Body>
					<Card.Title>ED Room #:</Card.Title>
					<div className='form-group'>
						<select
							value={fromRoom}
							onChange={handleChange}
							className='form-control'
							id='fromRoom'
							name='fromRoom'
							required
						>
							<option value=''>Select ED Room</option>
							<optgroup label='Suite A'>
								<option value='A1'>A1</option>
								<option value='A2'>A2</option>
								<option value='A3'>A3</option>
								<option value='A4'>A4</option>
								<option value='A5'>A5</option>
								<option value='A6'>A6</option>
								<option value='A7'>A7</option>
								<option value='A8'>A8</option>
								<option value='A9'>A9</option>
								<option value='A10'>A10</option>
								<option value='A11'>A11</option>
								<option value='A12'>A12</option>
							</optgroup>
							<optgroup label='Suite B'>
								<option value='B1'>B1</option>
								<option value='B2'>B2</option>
								<option value='B3'>B3</option>
								<option value='B4'>B4</option>
								<option value='B5'>B5</option>
								<option value='B6'>B6</option>
								<option value='B7'>B7</option>
								<option value='B8'>B8</option>
								<option value='B9'>B9</option>
								<option value='B10'>B10</option>
								<option value='B11'>B11</option>
								<option value='B12'>B12</option>
							</optgroup>
							{/* <optgroup label="Suite C">
        <option value="C">C</option>
      </optgroup> */}
							<optgroup label='Suite D'>
								<option value='D1'>D1</option>
								<option value='D2'>D2</option>
								<option value='D3'>D3</option>
								<option value='D4'>D4</option>
								<option value='D5'>D5</option>
								<option value='D6'>D6</option>
								<option value='D7'>D7</option>
								<option value='D8'>D8</option>
								<option value='D9'>D9</option>
								<option value='D10'>D10</option>
								<option value='D11'>D11</option>
								<option value='D12'>D12</option>
							</optgroup>
							<optgroup label='Suite E'>
								<option value='E1'>E1</option>
								<option value='E2'>E2</option>
								<option value='E3'>E3</option>
								<option value='E4'>E4</option>
								<option value='E5'>E5</option>
								<option value='E6'>E6</option>
								<option value='E7'>E7</option>
								<option value='E8'>E8</option>
								<option value='E9'>E9</option>
								<option value='E10'>E10</option>
								<option value='E11'>E11</option>
								<option value='E12'>E12</option>
							</optgroup>
							<optgroup label='TRAUMA '>
								<option value='TRAUMA 1'>TRAUMA 1</option>
								<option value='TRAUMA 2'>TRAUMA 2</option>
								<option value='TRAUMA 3'>TRAUMA 3</option>
								<option value='TRAUMA 4'>TRAUMA 4</option>
							</optgroup>
						</select>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default SelectEDRooms;
