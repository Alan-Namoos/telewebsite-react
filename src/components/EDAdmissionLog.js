import React, { useContext } from "react";
import { BoxListContext } from "../contexts/BoxListContext";
import { TransferLogContext } from "../contexts/TransferLogContext";
import TransferLogTable from "./transferLog/TransferLogTable";
import TransferLogForm from "./transferLog/TransferLogForm";
import BoxListTable from "./boxList/BoxListTable";
import AddBoxForm from "./boxList/AddBoxForm";

const EDAdmissionLog = () => {
  const { boxList } = useContext(BoxListContext);
  const { transferLogs } = useContext(TransferLogContext);
  const className =
    boxList.length < 4 ? "text-center animated heartBeat red" : "text-center";

  return (
    <>
      <div className="container">
        <h4 className="text-center">{transferLogs.length} Admits so far</h4>
        <div className="row gray">
          <div className="col">
            <TransferLogTable />
          </div>
          <div className="col">
            <TransferLogForm />
          </div>
        </div>

        <hr />

        <h4 className={className}>{boxList.length} Boxes in ED cabinet</h4>
        <div className="row gray">
          <div className="col">
            <BoxListTable />
          </div>
          <div className="col">
            <AddBoxForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default EDAdmissionLog;
