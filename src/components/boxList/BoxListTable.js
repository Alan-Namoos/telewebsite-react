import React, { useContext } from "react";
import sortBy from "lodash/sortBy";
import { BoxListContext } from "../../contexts/BoxListContext";

const BoxListTable = () => {
  const { boxList } = useContext(BoxListContext);
  // console.log("Table Box List", boxList);
  // console.log("Table Box List", sortBy(boxList, ["number"]));
  const sortedBoxList = sortBy(boxList, ["number"]);
  return (
    <table className="table table-bordered">
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
              <th scope="row">{i + 1}</th>
              <td>T {box.number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BoxListTable;
