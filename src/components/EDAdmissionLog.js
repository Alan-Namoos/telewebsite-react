import React, { useContext } from 'react';
import { TransferLogContext } from '../contexts/TransferLogContext';
import TransferLogTable from './transferLog/TransferLogTable';
import TransferLogForm from './transferLog/TransferLogForm';
import { Container, Row, Col } from 'react-bootstrap';

const EDAdmissionLog = () => {
	const { transferLogs } = useContext(TransferLogContext);
	const todaysDate = new Date();
	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<h4 className='text-center'>ED Admits: [{transferLogs.length}]</h4>
					</Col>
					<Col>
						<h5>Date: {todaysDate.toLocaleDateString()}</h5>
					</Col>
				</Row>

				<Row>
					<Col sm={9} className='mt-4 text-center align-middle'>
						{transferLogs.length === 0 ? <h3 className=''>No Records</h3> : <TransferLogTable />}
					</Col>
					<Col sm={3}>
						<TransferLogForm />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default EDAdmissionLog;
