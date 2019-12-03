import React, { useContext, useState } from 'react';
import { TransferLogContext } from '../../contexts/TransferLogContext';
import ModifyRecordForm from './ModifyRecordForm';

const TransferLogTable = () => {
	const { transferLogs } = useContext(TransferLogContext);
	const [log, setLog] = useState({
		id: '',
		boxNumber: '',
		fromRoom: '',
		toRoom: '',
		edCallTime: ''
	});

	const handleChange = (e) => {
		setLog({ ...log, [e.target.name]: e.target.value });
	};
	return (
		<>
			<table className='table table-bordered table-sm text-center'>
				<thead className='thead-light'>
					<tr>
						<th scope='col'>Count</th>
						<th scope='col'>Box</th>
						<th scope='col'>From Room</th>
						<th scope='col'>To Room</th>
						<th scope='col'>ED called at:</th>
						<th colSpan='4'> Actions</th>
					</tr>
				</thead>
				<tbody>
					{transferLogs.map((log, i) => {
						return (
							<tr key={log.id}>
								<td>{i + 1}</td>
								<td>T {log.boxNumber}</td>
								<td>{log.fromRoom}</td>
								<td>{log.toRoom}</td>
								<td>{log.edCallTime}</td>
								<td>
									<button className='btn btn-outline-success btn-sm' style={{ width: '75px' }}>
										In Room
									</button>
								</td>
								<td>
									<button
										onClick={() => {
											setLog(log);
										}}
										className='btn btn-outline-secondary btn-sm'
										style={{ width: '75px' }}
									>
										Modify
									</button>
								</td>
								<td>
									<button className='btn btn-outline-warning btn-sm' style={{ width: '75px' }}>
										Cancel
									</button>
								</td>
								<td>
									<button className='btn btn-outline-danger btn-sm' style={{ width: '75px' }}>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			<ModifyRecordForm
				logID={log.id}
				boxNumber={log.boxNumber}
				fromRoom={log.fromRoom}
				toRoom={log.toRoom}
				edCallTime={log.edCallTime}
				handleChange={handleChange}
			/>
		</>
	);
};

export default TransferLogTable;
