import React, { useState, useEffect, useContext } from "react";
import { BoxListContext } from "../../contexts/BoxListContext";
import BoxGrid from "./BoxGrid";
import BoxTable from "./BoxTable";
import "./box-grid.css";
import AddBoxForm from "../boxList/AddBoxForm";

const BoxGridContainer = () => {
  const [boxNumber, setBoxNumber] = useState("");
  const { boxList, addBox, removeDataBox } = useContext(BoxListContext);
  const className =
    boxList.length < 4 ? "text-center animated heartBeat red" : "text-center";
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
      <h4 className={className}>{boxList.length} Boxes in ED cabinet</h4>
      <div className="row">
        <div className="col-sm-2">
          {boxList.length === 0 ? "No Boxes selected." : <BoxTable />}
        </div>
        <div className="col-sm-2">
          <AddBoxForm />
        </div>
        <div className="col-sm-8">
          <BoxGrid selectBox={selectBox} />
        </div>
      </div>
    </>
  );
};

export default BoxGridContainer;
