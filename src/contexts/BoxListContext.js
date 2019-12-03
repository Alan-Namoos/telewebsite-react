import React, { useState, createContext } from 'react';
// import uuid from 'uuid/v1';
import boxes from '../data/boxes.json';

export const BoxListContext = createContext();

const BoxListContextProvider = (props) => {
	const [dataBoxList, setDataBoxList] = useState(boxes);
	const [boxList, setBoxList] = useState([]);

	const addBox = (newBox) => {
		setBoxList([...boxList, { number: parseInt(newBox) }]);
	};

	const removeBox = (boxNumber) => {
		const newBoxlist = boxList.filter((box) => {
			return box.number !== parseInt(boxNumber);
		});
		setBoxList(newBoxlist);
	};

	// this method removes the box number that was selected to be added in ED cabinet,
	// removes it from the dataBoxList that is used to creat the BoxGrid
	const removeDataBox = (dataBoxNumber) => {
		const newDataBoxList = dataBoxList.filter((box) => {
			return box.number !== dataBoxNumber;
		});
		setDataBoxList(newDataBoxList);
	};

	return (
		<BoxListContext.Provider value={{ dataBoxList, removeDataBox, boxList, addBox, removeBox }}>
			{props.children}
		</BoxListContext.Provider>
	);
};

export default BoxListContextProvider;
