import React, { useState, useEffect, useRef, useContext } from "react";
import sortBy from "lodash/sortBy";
import { TransferLogContext } from "../../contexts/TransferLogContext";
import { BoxListContext } from "../../contexts/BoxListContext";
import { Row, Col, Container, Card } from "react-bootstrap";
import edRooms from "../../data/edRooms";
import fourthFloorRooms from "../../data/fourthFloorRooms";
import fifthFloorRooms from "../../data/fifthFloorRooms";
import sixthFloorRooms from "../../data/sixthFloorRooms";
import seventhFloorRooms from "../../data/seventhFloorRooms";
import eightthFloorRooms from "../../data/eightthFloorRooms";
import tenthFloorRooms from "../../data/tenthFloorRooms";
import eleventhFloorRooms from "../../data/eleventhFloorRooms";

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

  const fourthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();
  const seventhRef = useRef();
  const eightthRef = useRef();
  const tenthRef = useRef();
  const eleventhRef = useRef();

  const selectFloor = floor => {
    setSelectedFloor(floor);
  };

  useEffect(() => {
    switch (selectedFloor) {
      case "4":
        setFloorRooms(fourthFloorRooms());
        fourthRef.current.className =
          "grid-cell hover text-center bg-primary text-white";
        fifthRef.current.className = "grid-cell hover text-center";
        sixthRef.current.className = "grid-cell hover text-center";
        seventhRef.current.className = "grid-cell hover text-center";
        eightthRef.current.className = "grid-cell hover text-center";
        tenthRef.current.className = "grid-cell hover text-center";
        eleventhRef.current.className = "grid-cell hover text-center";
        break;
      case "5":
        setFloorRooms(fifthFloorRooms());
        fourthRef.current.className = "grid-cell hover text-center";
        fifthRef.current.className =
          "grid-cell hover text-center bg-primary text-white";
        sixthRef.current.className = "grid-cell hover text-center";
        seventhRef.current.className = "grid-cell hover text-center";
        eightthRef.current.className = "grid-cell hover text-center";
        tenthRef.current.className = "grid-cell hover text-center";
        eleventhRef.current.className = "grid-cell hover text-center";
        break;
      case "6":
        setFloorRooms(sixthFloorRooms());
        fourthRef.current.className = "grid-cell hover text-center";
        fifthRef.current.className = "grid-cell hover text-center";
        sixthRef.current.className =
          "grid-cell hover text-center bg-primary text-white";
        seventhRef.current.className = "grid-cell hover text-center";
        eightthRef.current.className = "grid-cell hover text-center";
        tenthRef.current.className = "grid-cell hover text-center";
        eleventhRef.current.className = "grid-cell hover text-center";
        break;
      case "7":
        setFloorRooms(seventhFloorRooms());
        fourthRef.current.className = "grid-cell hover text-center";
        fifthRef.current.className = "grid-cell hover text-center";
        sixthRef.current.className = "grid-cell hover text-center";
        seventhRef.current.className =
          "grid-cell hover text-center bg-primary text-white";
        eightthRef.current.className = "grid-cell hover text-center";
        tenthRef.current.className = "grid-cell hover text-center";
        eleventhRef.current.className = "grid-cell hover text-center";
        break;
      case "8":
        setFloorRooms(eightthFloorRooms());
        fourthRef.current.className = "grid-cell hover text-center";
        fifthRef.current.className = "grid-cell hover text-center";
        sixthRef.current.className = "grid-cell hover text-center";
        seventhRef.current.className = "grid-cell hover text-center";
        eightthRef.current.className =
          "grid-cell hover text-center bg-primary text-white";
        tenthRef.current.className = "grid-cell hover text-center";
        eleventhRef.current.className = "grid-cell hover text-center";
        break;
      case "10":
        setFloorRooms(tenthFloorRooms());
        fourthRef.current.className = "grid-cell hover text-center";
        fifthRef.current.className = "grid-cell hover text-center";
        sixthRef.current.className = "grid-cell hover text-center";
        seventhRef.current.className = "grid-cell hover text-center";
        eightthRef.current.className = "grid-cell hover text-center";
        tenthRef.current.className =
          "grid-cell hover text-center bg-primary text-white";
        eleventhRef.current.className = "grid-cell hover text-center";
        break;
      case "11":
        setFloorRooms(eleventhFloorRooms());
        fourthRef.current.className = "grid-cell hover text-center";
        fifthRef.current.className = "grid-cell hover text-center";
        sixthRef.current.className = "grid-cell hover text-center";
        seventhRef.current.className = "grid-cell hover text-center";
        eightthRef.current.className = "grid-cell hover text-center";
        tenthRef.current.className = "grid-cell hover text-center";
        eleventhRef.current.className =
          "grid-cell hover text-center bg-primary text-white";
        break;

      default:
        setFloorRooms([]);
        fourthRef.current.className = "grid-cell hover text-center";
        fifthRef.current.className = "grid-cell hover text-center";
        sixthRef.current.className = "grid-cell hover text-center";
        seventhRef.current.className = "grid-cell hover text-center";
        eightthRef.current.className = "grid-cell hover text-center";
        tenthRef.current.className = "grid-cell hover text-center";
        eleventhRef.current.className = "grid-cell hover text-center";
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
    fourthRef.current.className = "grid-cell hover text-center";
    fifthRef.current.className = "grid-cell hover text-center";
    sixthRef.current.className = "grid-cell hover text-center";
    seventhRef.current.className = "grid-cell hover text-center";
    eightthRef.current.className = "grid-cell hover text-center";
    tenthRef.current.className = "grid-cell hover text-center";
    eleventhRef.current.className = "grid-cell hover text-center";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card className="mb-2">
          <Card.Body>
            <Card.Title>Box Number: </Card.Title>
            <Card.Text></Card.Text>
            <div className="form-group">
              {/* <label htmlFor="boxNumber">Box Number:</label> */}
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
          </Card.Body>
        </Card>

        <Card className="mb-2">
          <Card.Body>
            <Card.Title>ED Room #:</Card.Title>
            <div className="form-group">
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
          </Card.Body>
        </Card>

        <Card className="mb-2">
          <Card.Body>
            <Card.Title>Choose Floor:</Card.Title>
            <Container>
              <Row>
                <Col
                  className="grid-cell hover text-center"
                  onClick={() => selectFloor("4")}
                  ref={fourthRef}
                >
                  4th Floor
                </Col>
                <Col
                  className="grid-cell hover text-center"
                  onClick={() => selectFloor("5")}
                  ref={fifthRef}
                >
                  5th Floor
                </Col>
                <Col
                  className="grid-cell hover text-center"
                  onClick={() => selectFloor("6")}
                  ref={sixthRef}
                >
                  6th Floor
                </Col>
                <Col
                  className="grid-cell hover text-center"
                  onClick={() => selectFloor("7")}
                  ref={seventhRef}
                >
                  7th Floor
                </Col>
                <Col
                  className="grid-cell hover text-center"
                  onClick={() => selectFloor("8")}
                  ref={eightthRef}
                >
                  8th Floor
                </Col>
                <Col
                  className="grid-cell hover text-center"
                  onClick={() => selectFloor("10")}
                  ref={tenthRef}
                >
                  10th Floor
                </Col>
                <Col
                  className="grid-cell hover text-center"
                  onClick={() => selectFloor("11")}
                  ref={eleventhRef}
                >
                  11th Floor
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Card className="mb-2">
          <Card.Body>
            <Card.Title>To Room:</Card.Title>
            <div className="form-group">
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
          </Card.Body>
        </Card>

        <button type="submit" className="btn btn-primary btn-block">
          Add record
        </button>
      </form>
    </>
  );
};

export default TransferLogForm;
