import React, { useContext } from "react";
// import { BoxGridContext } from "../../contexts/BoxGridContext";
import { BoxListContext } from "../../contexts/BoxListContext";
import sortBy from "lodash/sortBy";
import "./box-grid.css";

const BoxTable = () => {
  const { boxList } = useContext(BoxListContext);
  const sortedBoxList = sortBy(boxList, ["number"]);
  const isVisible = true;
  console.log(boxList);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Box</th>
        </tr>
      </thead>
      <tbody>
        {sortedBoxList.map(box => {
          return (
            <tr key={box.id}>
              <td className={isVisible === true ? "" : "hide"}>{box.number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BoxTable;
