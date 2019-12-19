import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import fourthFloorRooms from '../../data/fourthFloorRooms';
import sortBy from 'lodash/sortBy';

const RnAssignmentForm = () => {
	const [floorRooms, setFloorRooms] = useState(fourthFloorRooms());
	const [roomsAndRn, setRoomsAndRn] = useState([]);
	const [theRn, setTheRn] = useState({ name: '', number: '' });
	const [rooms, setRooms] = useState({
		room1: { room: '', rn: '', number: '' },
		room2: { room: '', rn: '', number: '' },
		room3: { room: '', rn: '', number: '' },
		room4: { room: '', rn: '', number: '' }
	});

	const handleChange = (e) => {
		setRooms({
			...rooms,
			[e.target.name]: { room: e.target.value, rn: theRn.name, number: theRn.number }
		});
		// console.log(rooms);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setRoomsAndRn([...roomsAndRn, rooms.room1, rooms.room2, rooms.room3, rooms.room4]);
		setRooms({
			room1: { room: '', rn: '', number: '' },
			room2: { room: '', rn: '', number: '' },
			room3: { room: '', rn: '', number: '' },
			room4: { room: '', rn: '', number: '' }
		});

		const updatedFloorRooms = floorRooms.filter((room) => {
			return rooms.room !== room;
		});
		setFloorRooms(updatedFloorRooms);
	};

	// useEffect(() => {
	//  console.log(rooms);
	// }, [rooms]);

	useEffect(() => {
		console.log(roomsAndRn);
	}, [roomsAndRn]);

	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						{/* <p>
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
            </p> */}
						<Row>
							<Col>
								<Form.Group>
									<Form.Label>RN</Form.Label>
									<Form.Control
										type='text'
										name='name'
										value={theRn.name}
										onChange={(e) => setTheRn({ ...theRn, [e.target.name]: e.target.value })}
										required
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>RN Number</Form.Label>
									<Form.Control
										type='text'
										name='number'
										value={theRn.number}
										onChange={(e) => setTheRn({ ...theRn, [e.target.name]: e.target.value })}
										required
									/>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
								<Form.Group>
									<Form.Label>Select Room:</Form.Label>
									<Form.Control
										as='select'
										name='room1'
										value={rooms.room1.room}
										onChange={handleChange}
										required
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
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Select Room:</Form.Label>
									<Form.Control
										as='select'
										name='room2'
										value={rooms.room2.room}
										onChange={handleChange}
										required
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
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Select Room:</Form.Label>
									<Form.Control
										as='select'
										name='room3'
										value={rooms.room3.room}
										onChange={handleChange}
										required
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
							</Col>
							<Col>
								<Form.Group>
									<Form.Label>Select Room:</Form.Label>
									<Form.Control
										as='select'
										name='room4'
										value={rooms.room4.room}
										onChange={handleChange}
										required
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
							</Col>
						</Row>

						{/* <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Room 1</Form.Label>
                  <Form.Control
                    type='text'
                    name='room1'
                    value={rooms.room1.room}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Room 2</Form.Label>
                  <Form.Control
                    type='text'
                    name='room2'
                    value={rooms.room2.room}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Room 3</Form.Label>
                  <Form.Control
                    type='text'
                    name='room3'
                    value={rooms.room3.room}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Room 4</Form.Label>
                  <Form.Control
                    type='text'
                    name='room4'
                    value={rooms.room4.room}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row> */}

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Col>
				<Col>
					<Table bordered size='sm'>
						<thead>
							<tr>
								<th>Room #</th>
								<th>RN</th>
								<th>RN #</th>
								{/* <th>Room2</th>
                <th>Room3</th>
                <th>Room4</th> */}
							</tr>
						</thead>
						<tbody>
							{sortBy(roomsAndRn, ['room']).map((item, i) => {
								return (
									<tr key={i}>
										<td>{item.room}</td>
										<td>{item.rn}</td>
										<td>{item.number}</td>
										{/* <td>{item.room2}</td>
                    <td>{item.room3}</td>
                    <td>{item.room4}</td> */}
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
