import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import fourthFloorRooms from '../../data/fourthFloorRooms';
import sortBy from 'lodash/sortBy';

const RnAssignmentForm = () => {
	const [floorRooms, setFloorRooms] = useState(fourthFloorRooms());
	const [currentRN, setCurrentRN] = useState({
		name: '',
		number: '',
		isHidden: false
	});
	const [assignment, setAssignment] = useState({
		room: '',
		rn: '',
		number: '',
		isHidden: true
	});

	const [roomsAndRn, setRoomsAndRn] = useState([]);

	const handleChange = (e) => {
		setAssignment({
			[e.target.name]: e.target.value,
			rn: currentRN.name,
			number: currentRN.number
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setRoomsAndRn([...roomsAndRn, assignment]);
		setAssignment({
			room: '',
			rn: '',
			number: ''
		});

		const updatedFloorRooms = floorRooms.filter((room) => {
			return assignment.room !== room;
		});
		setFloorRooms(updatedFloorRooms);
	};

	useEffect(() => {}, []);

	return (
		<Container>
			<Row>
				<Col>
					<Row className='text-center'>
						<Col>
							<h4>{currentRN.name}</h4>
						</Col>
						<Col>
							<h4>{currentRN.number}</h4>
						</Col>
						<Col>
							{/* <h4>{assignment.roomsAssigned === 0 ? '' : `Rooms: ${assignment.roomsAssigned}`}</h4> */}
						</Col>
					</Row>
					<Form
						onSubmit={(e) => {
							e.preventDefault();
							console.log('RN Form submitted');
						}}
					>
						<Form.Group>
							<Form.Label hidden={currentRN.isHidden}>RN</Form.Label>
							<Form.Control
								type='text'
								name='name'
								value={currentRN.name}
								onChange={(e) => setCurrentRN({ ...currentRN, [e.target.name]: e.target.value })}
								hidden={currentRN.isHidden}
								required
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label hidden={currentRN.isHidden}>RN Number</Form.Label>
							<Form.Control
								type='text'
								name='number'
								value={currentRN.number}
								onChange={(e) => setCurrentRN({ ...currentRN, [e.target.name]: e.target.value })}
								hidden={currentRN.isHidden}
								required
							/>
						</Form.Group>
						<Button
							variant='primary'
							type='submit'
							onClick={() => {
								if (currentRN.name !== '' && currentRN.number !== '') {
									setCurrentRN({ ...currentRN, isHidden: true });
									setAssignment({ ...assignment, isHidden: false });
								}
							}}
							hidden={currentRN.isHidden}
						>
							Add RN
						</Button>
					</Form>

					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label hidden={assignment.isHidden}>Select Room:</Form.Label>
							<Form.Control
								as='select'
								name='room'
								value={assignment.room}
								onChange={handleChange}
								required
								hidden={assignment.isHidden}
							>
								<option value=''>No room selected</option>
								{floorRooms.map((room, i) => {
									return (
										<option value={room} key={i}>
											{room}
										</option>
									);
								})}
							</Form.Control>
						</Form.Group>

						<Row className='text-center'>
							<Col>
								<Button variant='primary' type='submit' hidden={assignment.isHidden}>
									Add Room
								</Button>
							</Col>
							<Col>
								<Button
									variant='primary'
									hidden={assignment.isHidden}
									onClick={() => {
										setAssignment({ ...assignment, isHidden: true });
										setCurrentRN({ name: '', number: '', roomsAssigned: 0, isHidden: false });
									}}
								>
									New RN
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
				<Col>
					<Table bordered striped size='sm'>
						<thead>
							<tr>
								<th>Room #</th>
								<th>RN</th>
								<th>RN #</th>
							</tr>
						</thead>
						<tbody>
							{sortBy(roomsAndRn, ['room']).map((item, i) => {
								return (
									<tr key={i}>
										<td>{item.room}</td>
										<td>{item.rn}</td>
										<td>{item.number}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
};

export default RnAssignmentForm;
