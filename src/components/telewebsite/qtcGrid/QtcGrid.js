import React, { useState } from "react";
import QtcTable from "./QtcTable";
import "./qtcGrid.css";
import { Badge } from "react-bootstrap";

const QtcGrid = () => {
  const [state, setState] = useState({
    hr: "",
    qt: "",
    qtc: ""
  });

  const [color, setColor] = useState("");

  function checkQtc(hr, qt, qtc) {
    setState({ ...state, hr: hr, qt: qt, qtc: qtc });
    if (qtc < 450) {
      setColor("success");
      return;
    }

    if (qtc > 449 && qtc < 500) {
      setColor("warning");
      return;
    }

    if (qtc > 499) {
      setColor("danger");
      return;
    }
  }

  const style = {
    fontSize: "16px",
    marginRight: "5px"
  };

  return (
    <>
      <QtcTable checkQtc={checkQtc} />
      {state.qtc === "" ? (
        ""
      ) : (
        <div className="text-center">
          <hr />
          <Badge style={style} variant="dark">
            HR: {state.hr}
          </Badge>
          <Badge style={style} variant="dark">
            Qt: {state.qt}
          </Badge>
          <Badge style={style} variant={color}>
            QTc: {state.qtc}
          </Badge>
        </div>
      )}
    </>
  );
};

export default QtcGrid;
