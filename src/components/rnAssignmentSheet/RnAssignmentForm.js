import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

const RnAssignmentForm = () => {
	const [theRn, setTheRn] = useState({ name: '', number: '' });
	const [rooms, setRooms] = useState({
		room1: '',
		room2: '',
		room3: '',
		room4: '',
		rn: ''
	});

	const [roomsAndRn, setRoomsAndRn] = useState([]);

	const handleChange = (e) => {
		setRooms({ ...rooms, [e.target.name]: e.target.value, rn: theRn.name, number: theRn.number });
		// console.log(rooms);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setRoomsAndRn([...roomsAndRn, rooms]);
		setTheRn({ name: '', number: '' });
		setRooms({
			room1: '',
			room2: '',
			room3: '',
			room4: '',
			rn: ''
		});
	};

	useEffect(() => {
		console.log('Rooms: ', rooms);
		console.log('RN and Rooms: ', roomsAndRn);
	}, [rooms, roomsAndRn]);

	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<p>
							{theRn.name}
							{'-'}
							{theRn.number}
							{' - ['}
							{rooms.room1}
							{']'} {'- ['}
							{rooms.room2}
							{']'} {'- ['}
							{rooms.room3}
							{']'} {'- ['}
							{rooms.room4}
							{']'}
						</p>
						<Form.Group>
							<Form.Label>RN</Form.Label>
							<Form.Control
								type='text'
								name='name'
								value={theRn.name}
								onChange={(e) => setTheRn({ ...theRn, [e.target.name]: e.target.value })}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>RN Number</Form.Label>
							<Form.Control
								type='text'
								name='number'
								value={theRn.number}
								onChange={(e) => setTheRn({ ...theRn, [e.target.name]: e.target.value })}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Room 1</Form.Label>
							<Form.Control type='text' name='room1' value={rooms.room1} onChange={handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Room 2</Form.Label>
							<Form.Control type='text' name='room2' value={rooms.room2} onChange={handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Room 3</Form.Label>
							<Form.Control type='text' name='room3' value={rooms.room3} onChange={handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Room 4</Form.Label>
							<Form.Control type='text' name='room4' value={rooms.room4} onChange={handleChange} />
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Col>
				<Col>
					<Table bordered size='sm'>
						<thead>
							<tr>
								<th>RN</th>
								<th>RN #</th>
								<th>Room1</th>
								<th>Room2</th>
								<th>Room3</th>
								<th>Room4</th>
							</tr>
						</thead>
						<tbody>
							{roomsAndRn.map((item, i) => {
								return (
									<tr key={i}>
										<td>{item.rn}</td>
										<td>{item.number}</td>
										<td>{item.room1}</td>
										<td>{item.room2}</td>
										<td>{item.room3}</td>
										<td>{item.room4}</td>
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
