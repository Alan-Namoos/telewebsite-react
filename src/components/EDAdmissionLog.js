import React, { useContext } from "react";
import { TransferLogContext } from "../contexts/TransferLogContext";
import TransferLogTable from "./transferLog/TransferLogTable";
import TransferLogForm from "./transferLog/TransferLogForm";

const EDAdmissionLog = () => {
  const { transferLogs } = useContext(TransferLogContext);

  return (
    <>
      <div className="container">
        <h4 className="text-center">{transferLogs.length} Admits so far</h4>
        <div className="row">
          <div className="col-sm-9 mt-4">
            {transferLogs.length === 0 ? "No Records" : <TransferLogTable />}
          </div>
          <div className="col-sm-3">
            <TransferLogForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default EDAdmissionLog;
