import React from "react";
import { Card } from "react-bootstrap";

const HrCalcTool = () => {
  const calc_hr = () => {};
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>HR Calculater (R-R)</Card.Title>
        <hr />
        <Card.Text></Card.Text>
        <input
          className="form-control"
          type="number"
          autoComplete="off"
          id="txt_r_r"
          maxLength="4"
          placeholder="Number of Small boxes"
          required
          onKeyUp={calc_hr()}
        />
        <h5 className="text-center mt-2">
          <span className="badge badge-primary" id="display_hr"></span>
        </h5>
      </Card.Body>
    </Card>
  );
};

export default HrCalcTool;
