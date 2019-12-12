import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RnAssignmentForm = () => {
	const [theRn, setTheRn] = useState('');
	const [rooms, setRooms] = useState({
		room: '',
		rn: ''
	});

	const handleChange = (e) => {
		setRooms({ ...rooms, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<p>RN: {theRn}</p>
						<p>Room: {rooms.room}</p>
						<Form.Group>
							<Form.Label>RN</Form.Label>
							<Form.Control
								type='text'
								name='rn'
								value={theRn}
								onChange={(e) => setTheRn(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Room 1</Form.Label>
							<Form.Control type='text' name='room' value={rooms.room} onChange={handleChange} />
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default RnAssignmentForm;
