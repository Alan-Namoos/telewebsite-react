import React, { useContext } from "react";
import { BoxListContext } from "../../contexts/BoxListContext";
import BoxListTable from "./BoxListTable";
import AddBoxForm from "./AddBoxForm";

const BoxListContainer = () => {
  const { boxList } = useContext(BoxListContext);
  const className =
    boxList.length < 4 ? "text-center animated heartBeat red" : "text-center";
  return (
    <>
      <h4 className={className}>{boxList.length} Boxes in ED cabinet</h4>
      <div className="container">
        <div className="row">
          <div className="col">
            <AddBoxForm />
            <hr />
            {boxList.length === 0 ? "No Boxes selected." : <BoxListTable />}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxListContainer;
