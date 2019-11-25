import React, { useContext } from "react";
// import { BoxGridContext } from "../../contexts/BoxGridContext";
import { BoxListContext } from "../../contexts/BoxListContext";
import sortBy from "lodash/sortBy";
import "./box-grid.css";

const BoxTable = () => {
  const { boxList } = useContext(BoxListContext);
  const sortedBoxList = sortBy(boxList, ["number"]);
  const isVisible = true;
  // console.log(boxList);
  return (
    <table className="table table-bordered table-sm text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Box</th>
        </tr>
      </thead>
      <tbody>
        {sortedBoxList.map((box, i) => {
          return (
            <tr key={box.id}>
              <td>{i + 1}</td>
              <td className={isVisible === true ? "" : "hide"}>
                T {box.number}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BoxTable;
