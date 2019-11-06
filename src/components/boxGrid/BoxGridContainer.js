import React, { useState, useEffect, useContext } from "react";
import "./box-grid.css";
// import { BoxGridContext } from "../../contexts/BoxGridContext";
import { BoxListContext } from "../../contexts/BoxListContext";
import BoxGrid from "./BoxGrid";
import BoxTable from "./BoxTable";

const BoxGridContainer = () => {
  const [boxNumber, setBoxNumber] = useState("");
  // const { addBox } = useContext(BoxGridContext);
  // const { addBox } = useContext(BoxListContext);
  const { addBox, removeDataBox } = useContext(BoxListContext);

  const selectBox = e => {
    const selectedBox = e.target.innerHTML;
    setBoxNumber(selectedBox);
    removeDataBox(selectedBox);
  };

  useEffect(() => {
    if (boxNumber === "") {
      return;
    } else {
      addBox(boxNumber);
    }
    // eslint-disable-next-line
  }, [boxNumber]);

  return (
    <>
      <BoxGrid selectBox={selectBox} />
      <BoxTable />
    </>
  );
};

export default BoxGridContainer;
