import React, { useState, createContext } from "react";
import uuid from "uuid/v1";
import boxes from "../data/boxes.json";

export const BoxListContext = createContext();

const BoxListContextProvider = props => {
  const [dataBoxList, setDataBoxList] = useState(boxes);
  const [boxList, setBoxList] = useState([]);

  const addBox = newBox => {
    setBoxList([...boxList, { id: uuid(), number: newBox }]);
  };
  const removeBox = boxNumber => {
    const newBoxlist = boxList.filter(box => {
      return box.number !== boxNumber;
    });
    setBoxList(newBoxlist);
    // console.log("box to delete: ", boxNumber);
    // console.log("box list after delete: ", boxList);
  };

  const removeDataBox = dataBoxNumber => {
    const newDataBoxList = dataBoxList.filter(box => {
      return box.number !== dataBoxNumber;
    });
    setDataBoxList(newDataBoxList);
  };

  return (
    <BoxListContext.Provider
      value={{ dataBoxList, removeDataBox, boxList, addBox, removeBox }}
    >
      {props.children}
    </BoxListContext.Provider>
  );
};

export default BoxListContextProvider;
