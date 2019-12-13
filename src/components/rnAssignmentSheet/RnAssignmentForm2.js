import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

const RnAssignmentForm = () => {
	const [roomsRnNumber, setRoomsRnNumber] = useState([
		{ 401: '401-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 402: '402-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 403: '403-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 404: '404-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 405: '405-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 406: '406-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 407: '407-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 4081: '408-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 4082: '408-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 4091: '409-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 4092: '409-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40101: '410-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40102: '410-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40111: '411-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40112: '411-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40121: '412-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40122: '412-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40123: '412-3', rn: '', rnNumber: '', assigned: 'false' },
		{ 40124: '412-4', rn: '', rnNumber: '', assigned: 'false' },
		{ 40125: '412-5', rn: '', rnNumber: '', assigned: 'false' },
		{ 40126: '412-6', rn: '', rnNumber: '', assigned: 'false' },
		{ 40127: '412-7', rn: '', rnNumber: '', assigned: 'false' },
		{ 40128: '412-8', rn: '', rnNumber: '', assigned: 'false' },
		{ 40191: '419-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40191: '419-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40201: '420-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40202: '420-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40211: '421-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40212: '421-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40221: '422-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40222: '422-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40231: '423-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40232: '423-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40241: '424-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40242: '424-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40251: '425-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40252: '425-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40261: '426-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40262: '426-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40271: '427-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40272: '427-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 40281: '428-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 40282: '428-2', rn: '', rnNumber: '', assigned: 'false' },
		{ 4029: '429-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 4030: '430-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 4031: '431-1', rn: '', rnNumber: '', assigned: 'false' },
		{ 4032: '432-1', rn: '', rnNumber: '', assigned: 'false' }
	]);

	const [rooms, setRooms] = useState({});

	const handleChange = (e) => {};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {}, []);

	useEffect(() => {}, []);

	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
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
							<Form.Control type='text' name='room1' value={roomRn.room1} onChange={handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Room 2</Form.Label>
							<Form.Control type='text' name='room2' value={roomRn.room2} onChange={handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Room 3</Form.Label>
							<Form.Control type='text' name='room3' value={roomRn.room3} onChange={handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label>Room 4</Form.Label>
							<Form.Control type='text' name='room4' value={roomRn.room4} onChange={handleChange} />
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
								<th>Room#</th>
								<th>RN Name</th>
								<th>RN #</th>
							</tr>
						</thead>
						<tbody>
							{roomsAndRnAndNumber.map((item, i) => {
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
