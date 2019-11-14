import React, { useState, useContext } from "react";
import sortBy from "lodash/sortBy";
import { TransferLogContext } from "../../contexts/TransferLogContext";
import { BoxListContext } from "../../contexts/BoxListContext";
import edRooms from "../../data/edRooms";
import floorRooms from "../../data/floorRooms";

const TransferLogForm = () => {
  const { boxList, removeBox } = useContext(BoxListContext);
  const { addTransferLog } = useContext(TransferLogContext);
  const [transferLog, setTransferLog] = useState({
    boxNumber: "",
    fromRoom: "",
    toRoom: ""
  });
  const EDRooms = edRooms();
  const FloorRooms = floorRooms();
  const boxesInED =
    boxList.length > 0
      ? `Select a box - ${boxList.length} availabe`
      : "No boxes availabe in ED";
  const handleChange = e => {
    setTransferLog({ ...transferLog, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (transferLog.boxNumber === "") {
      alert("Select a box number");
      return;
    }
    addTransferLog(transferLog);
    removeBox(transferLog.boxNumber);
    setTransferLog({ boxNumber: "", fromRoom: "", toRoom: "" });
  };
  console.log(transferLog);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="boxNumber">Box Number:</label>
          <select
            value={transferLog.boxNumber}
            onChange={handleChange}
            className="form-control"
            id="boxNumber"
            name="boxNumber"
            required
          >
            <option value="">{boxesInED}</option>
            {sortBy(boxList, ["number"]).map((box, i) => {
              return (
                <option key={box.id} value={box.number}>
                  T {box.number}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fromRoom">From Room:</label>
          <select
            value={transferLog.fromRoom}
            onChange={handleChange}
            className="form-control"
            id="fromRoom"
            name="fromRoom"
            required
          >
            <option value="">{"Select ED Room"}</option>
            {sortBy(EDRooms, ["number"]).map((room, i) => {
              return (
                <option key={room} value={room}>
                  {room}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="toRoom">To Room:</label>
          <select
            value={transferLog.toRoom}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="toRoom"
            name="toRoom"
            required
          >
            <option>{"Select Room"}</option>
            {sortBy(FloorRooms, ["number"]).map((room, i) => {
              return (
                <option key={room} value={room}>
                  {room}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Add record
        </button>
      </form>
    </>
  );
};

export default TransferLogForm;
