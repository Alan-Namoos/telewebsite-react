import React, { useState, createContext } from "react";
import uuid from "uuid/v1";

export const TransferLogContext = createContext();

const TransferLogContextProvider = props => {
  const [transferLogs, setTransferLogs] = useState([]);
  const addTransferLog = transferLog => {
    setTransferLogs([...transferLogs, { id: uuid(), ...transferLog }]);
  };
  return (
    <TransferLogContext.Provider value={{ transferLogs, addTransferLog }}>
      {props.children}
    </TransferLogContext.Provider>
  );
};

export default TransferLogContextProvider;
