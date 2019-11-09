import React, { Fragment, useContext } from "react";
import { TransferLogContext } from "../../contexts/TransferLogContext";

const TransferLogTable = () => {
  const { transferLogs } = useContext(TransferLogContext);
  // const duplicate = "bg-danger text-white";
  const duplicate = "";
  return (
    <Fragment>
      <table className="table table-bordered table-striped table-sm text-center">
        <thead>
          <tr>
            {/* <th scope="col">Count</th> */}
            <th scope="col">Box</th>
            <th scope="col">From Room</th>
            <th scope="col">To Room</th>
          </tr>
        </thead>
        <tbody>
          {transferLogs.map((log, i) => {
            return (
              <tr className={duplicate} key={log.id}>
                {/* <td>{i + 1}</td> */}
                <td>T {log.boxNumber}</td>
                <td>{log.fromRoom}</td>
                <td>{log.toRoom}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TransferLogTable;
