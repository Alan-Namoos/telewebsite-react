import React, { useState, useEffect, useContext } from "react";
import sortBy from "lodash/sortBy";
import { TransferLogContext } from "../../contexts/TransferLogContext";
import { BoxListContext } from "../../contexts/BoxListContext";
import { Row, Col, Container } from "react-bootstrap";
import edRooms from "../../data/edRooms";
import fourthFloorRooms from "../../data/fourthFloorRooms";
import fifthFloorRooms from "../../data/fifthFloorRooms";
import sixthFloorRooms from "../../data/sixthFloorRooms";
import seventhFloorRooms from "../../data/seventhFloorRooms";
import eightthFloorRooms from "../../data/eightthFloorRooms";
import tenthFloorRooms from "../../data/tenthFloorRooms";
import eleventhFloorRooms from "../../data/eleventhFloorRooms";
// import Floors from "./Floors";

const TransferLogForm = () => {
  const { boxList, removeBox } = useContext(BoxListContext);
  const { addTransferLog } = useContext(TransferLogContext);
  const [selectedFloor, setSelectedFloor] = useState("");
  const [floorRooms, setFloorRooms] = useState([]);
  const [transferLog, setTransferLog] = useState({
    boxNumber: "",
    fromRoom: "",
    toRoom: ""
  });

  const EDRooms = edRooms();

  const boxesInED =
    boxList.length > 0
      ? `Select a box - ${boxList.length} availabe`
      : "No boxes availabe in ED";

  // const selectFloor = floorRoomsList => {
  //   setFloorRooms(floorRoomsList);
  // };

  const selectFloor = (e, floor) => {
    setSelectedFloor(floor);
    // console.log();
    e.target.style.backgroundColor = "#28a745";
    e.target.style.color = "#fff";
  };

  useEffect(() => {
    switch (selectedFloor) {
      case "4":
        setFloorRooms(fourthFloorRooms());
        break;
      case "5":
        setFloorRooms(fifthFloorRooms());
        break;
      case "6":
        setFloorRooms(sixthFloorRooms());
        break;
      case "7":
        setFloorRooms(seventhFloorRooms());
        break;
      case "8":
        setFloorRooms(eightthFloorRooms());
        break;
      case "10":
        setFloorRooms(tenthFloorRooms());
        break;
      case "11":
        setFloorRooms(eleventhFloorRooms());
        break;

      default:
        setFloorRooms([]);
    }
  }, [selectedFloor]);

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
  // console.log(transferLog);
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

        {/* <ListGroup className="list-group-horizontal-md">
          <ListGroup.Item className="hover" onClick={() => selectFloor("4")}>
            4th Floor
          </ListGroup.Item>
          <ListGroup.Item className="hover" onClick={() => selectFloor("5")}>
            5th Floor
          </ListGroup.Item>
          <ListGroup.Item className="hover" onClick={() => selectFloor("6")}>
            6th Floor
          </ListGroup.Item>
          <ListGroup.Item className="hover" onClick={() => selectFloor("7")}>
            7th Floor
          </ListGroup.Item>
          <ListGroup.Item className="hover" onClick={() => selectFloor("8")}>
            8th Floor
          </ListGroup.Item>
          <ListGroup.Item className="hover" onClick={() => selectFloor("10")}>
            10th Floor
          </ListGroup.Item>
          <ListGroup.Item className="hover" onClick={() => selectFloor("11")}>
            11th Floor
          </ListGroup.Item>
        </ListGroup> */}
        <Container>
          <Row>
            <Col
              className="grid-cell hover text-center"
              onClick={e => selectFloor(e, "4")}
            >
              4th Floor
            </Col>
            <Col
              className="grid-cell hover text-center"
              onClick={e => selectFloor(e, "5")}
            >
              5th Floor
            </Col>
            <Col
              className="grid-cell hover text-center"
              onClick={e => selectFloor(e, "6")}
            >
              6th Floor
            </Col>
            <Col
              className="grid-cell hover text-center"
              onClick={e => selectFloor(e, "7")}
            >
              7th Floor
            </Col>
            <Col
              className="grid-cell hover text-center"
              onClick={e => selectFloor(e, "8")}
            >
              8th Floor
            </Col>
            <Col
              className="grid-cell hover text-center"
              onClick={e => selectFloor(e, "10")}
            >
              10th Floor
            </Col>
            <Col
              className="grid-cell hover text-center"
              onClick={e => selectFloor(e, "11")}
            >
              11th Floor
            </Col>
          </Row>
        </Container>

        {/* <Floors parentSelectFloor={selectFloor} /> */}

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
            <option value="">Select a {selectedFloor}th Floor Room</option>
            {sortBy(floorRooms, ["number"]).map((room, i) => {
              return (
                <option key={room} value={room}>
                  {room}
                </option>
              );
            })}
          </select>
        </div>

        <div className="row grid-container">
          {sortBy(floorRooms, ["number"]).map((room, i) => {
            return (
              <div
                key={room}
                // onClick={selectBox}
                className="col-1 grid-cell text-center"
              >
                {room}
              </div>
            );
          })}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Add record
        </button>
      </form>
    </>
  );
};

export default TransferLogForm;
