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

const TransferLogForm = () => {
	const { removeBox } = useContext(BoxListContext);
	const { addTransferLog } = useContext(TransferLogContext);
	const [selectedFloor, setSelectedFloor] = useState('');
	const [floorRooms, setFloorRooms] = useState([]);
	const [active, setActive] = useState('');
	const [transferLog, setTransferLog] = useState({
		boxNumber: '',
		fromRoom: '',
		toRoom: '',
		edCallTime: ''
	});

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
			// edCallTime: new Date().toLocaleTimeString()
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		transferLog.edCallTime = new Date().toLocaleTimeString();
		addTransferLog(transferLog);
		removeBox(transferLog.boxNumber);
		setTransferLog({ boxNumber: '', fromRoom: '', toRoom: '', edCallTime: '' });
		setSelectedFloor('');
		setActive('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<SelectAvailableEDBox boxNumber={transferLog.boxNumber} handleChange={handleChange} />
			<SelectEDRooms fromRoom={transferLog.fromRoom} handleChange={handleChange} />
			<ChooseFloorGrid selectFloor={selectFloor} active={active} />
			<SelectToRoom
				toRoom={transferLog.toRoom}
				handleChange={handleChange}
				selectedFloor={selectedFloor}
				floorRooms={floorRooms}
			/>
			<button type='submit' className='btn btn-primary btn-block'>
				Add record
			</button>
		</form>
	);
};

export default TransferLogForm;
