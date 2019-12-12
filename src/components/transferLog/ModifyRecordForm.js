import React, { useState, useEffect, useContext } from 'react';
import { TransferLogContext } from '../../contexts/TransferLogContext';
import { BoxListContext } from '../../contexts/BoxListContext';
import SelectEDRooms from '../../data/SelectEDRooms';
import thirdFloorRooms from '../../data/thirdFloorRooms';
import fourthEAUFloorRooms from '../../data/fourthEAUFloorRooms';
import fourthFloorRooms from '../../data/fourthFloorRooms';
import fifthFloorRooms from '../../data/fifthFloorRooms';
import sixthFloorRooms from '../../data/sixthFloorRooms';
import seventhFloorRooms from '../../data/seventhFloorRooms';
import eightthFloorRooms from '../../data/eightthFloorRooms';
import tenthFloorRooms from '../../data/tenthFloorRooms';
import eleventhFloorRooms from '../../data/eleventhFloorRooms';
import SelectAvailableEDBox from './SelectAvailableEDBox';
import ChooseFloorGrid from './ChooseFloorGrid';
import SelectToRoom from './SelectToRoom';
import { Row, Col } from 'react-bootstrap';

const ModifyRecordForm = ({ logID, boxNumber, fromRoom, toRoom, edCallTime }) => {
	const { addBox } = useContext(BoxListContext);
	const { updateTransferLog } = useContext(TransferLogContext);
	const [selectedFloor, setSelectedFloor] = useState('');
	const [floorRooms, setFloorRooms] = useState([]);
	const [active, setActive] = useState('');
	const [transferLog, setTransferLog] = useState({
		id: logID,
		boxNumber: '',
		fromRoom: '',
		toRoom: '',
		edCallTime: ''
	});

	console.log('Transfer Log: ', transferLog);

	const selectFloor = (floor) => {
		setSelectedFloor(floor);
		const clickedFloor = floor;
		if (active === clickedFloor) {
			setActive('');
		} else {
			setActive(clickedFloor);
		}
	};

	useEffect(() => {
		switch (selectedFloor) {
			case '3':
				setFloorRooms(thirdFloorRooms());
				break;

			case '4':
				setFloorRooms(fourthFloorRooms());
				break;

			case 'EAU':
				setFloorRooms(fourthEAUFloorRooms());
				break;

			case '5':
				setFloorRooms(fifthFloorRooms());
				break;

			case '6':
				setFloorRooms(sixthFloorRooms());
				break;

			case '7':
				setFloorRooms(seventhFloorRooms());
				break;

			case '8':
				setFloorRooms(eightthFloorRooms());
				break;

			case '10':
				setFloorRooms(tenthFloorRooms());
				break;

			case '11':
				setFloorRooms(eleventhFloorRooms());
				break;

			default:
				setFloorRooms([]);
		}
	}, [selectedFloor]);

	const handleChange = (e) => {
		setTransferLog({
			...transferLog,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateTransferLog(transferLog);
		addBox(transferLog.boxNumber);
		setTransferLog({ id: '', boxNumber: '', fromRoom: '', toRoom: '', edCallTime: '' });
		setSelectedFloor('');
		setActive('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<Row>
				<Col>
					<SelectAvailableEDBox boxNumber={boxNumber} handleChange={handleChange} />
				</Col>
				<Col>
					<SelectEDRooms fromRoom={fromRoom} handleChange={handleChange} />
				</Col>
				<Col>
					<ChooseFloorGrid selectFloor={selectFloor} active={active} />
				</Col>
				<Col>
					<SelectToRoom
						toRoom={toRoom}
						handleChange={handleChange}
						selectedFloor={selectedFloor}
						floorRooms={floorRooms}
					/>
				</Col>
				<Col>
					<input
						type='text'
						name='edCallTime'
						className='form-control'
						value={edCallTime}
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<button type='submit' className='btn btn-primary btn-block'>
						Update record
					</button>
				</Col>
			</Row>
		</form>
	);
};

export default ModifyRecordForm;
