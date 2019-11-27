import React, { useContext } from "react";
import { TransferLogContext } from "../../contexts/TransferLogContext";

const TransferLogTable = () => {
  const { transferLogs } = useContext(TransferLogContext);
  // const duplicate = "bg-danger text-white";
  const duplicate = "";
  const edCallDateAndTime = new Date();
  return (
    <>
      <table className="table table-bordered table-sm text-center">
        <thead className="thead-light">
          <tr>
            {/* <th scope="col">Count</th> */}
            <th scope="col">Box</th>
            <th scope="col">From Room</th>
            <th scope="col">To Room</th>
            <th scope="col">Time</th>
            <th colSpan="3"> Actions</th>
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
                <td>
                  {edCallDateAndTime.toLocaleTimeString()}{" "}
                  {edCallDateAndTime.toLocaleDateString()}
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    style={{ width: "75px" }}
                  >
                    Cancel
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    style={{ width: "75px" }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ width: "75px" }}
                  >
                    Admitted
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransferLogTable;
