import React, { useState, createContext } from 'react';
import uuid from 'uuid/v1';

export const TransferLogContext = createContext();

const TransferLogContextProvider = (props) => {
	const [transferLogs, setTransferLogs] = useState([]);

	const addTransferLog = (transferLog) => {
		setTransferLogs([...transferLogs, { id: uuid(), ...transferLog }]);
	};

	const updateTransferLog = (updatedLog) => {
		const updatedTransferLogs = transferLogs.filter((log) => {
			return log.id !== updatedLog.id;
		});
		setTransferLogs([...updatedTransferLogs, updatedLog]);
	};

	return (
		<TransferLogContext.Provider value={{ transferLogs, addTransferLog, updateTransferLog }}>
			{props.children}
		</TransferLogContext.Provider>
	);
};

export default TransferLogContextProvider;
