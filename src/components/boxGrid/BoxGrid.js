import React, { useContext } from "react";
// import boxes from "../../data/boxes.json";
import { BoxListContext } from "../../contexts/BoxListContext";
import "./box-grid.css";

const BoxGrid = ({ selectBox }) => {
  const { dataBoxList } = useContext(BoxListContext);
  return (
    <>
      <div className="row grid-container">
        {dataBoxList.map(box => {
          return (
            <div
              key={box.id}
              onClick={selectBox}
              className="col-1 grid-cell hover text-center"
            >
              {box.number}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BoxGrid;
