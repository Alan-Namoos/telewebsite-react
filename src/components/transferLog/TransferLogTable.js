import React, { Fragment, useContext } from "react";
import { TransferLogContext } from "../../contexts/TransferLogContext";

const TransferLogTable = () => {
  const { transferLogs } = useContext(TransferLogContext);
  return (
    <Fragment>
      <table className="table table-bordered">
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
              <tr key={log.id}>
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
