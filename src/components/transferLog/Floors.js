import React, { useState, useEffect } from "react";
import fourthFloorRooms from "../../data/fourthFloorRooms";
import fifthFloorRooms from "../../data/fifthFloorRooms";
import sixthFloorRooms from "../../data/sixthFloorRooms";
import seventhFloorRooms from "../../data/seventhFloorRooms";
import eightthFloorRooms from "../../data/eightthFloorRooms";
import tenthFloorRooms from "../../data/tenthFloorRooms";
import eleventhFloorRooms from "../../data/eleventhFloorRooms";
import { ListGroup } from "react-bootstrap";

const Floors = ({ parentSelectFloor }) => {
  const [selectedFloor, setSelectedFloor] = useState("");
  const [floorRooms, setFloorRooms] = useState([]);

  const selectFloor = floor => {
    setSelectedFloor(floor);
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

  useEffect(() => {
    parentSelectFloor(floorRooms);
  }, []);

  return (
    <ListGroup className="list-group-horizontal-md">
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
    </ListGroup>
  );
};

export default Floors;
