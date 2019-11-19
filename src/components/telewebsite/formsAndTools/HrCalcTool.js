import React, { useState, useEffect } from "react";
import { Card, Badge } from "react-bootstrap";

const HrCalcTool = () => {
  const [rr, setRr] = useState(0);
  const [heartRate, setHeartRate] = useState(0);

  const handleChange = e => {
    setRr(e.target.value);
  };

  useEffect(() => {
    // if (heartRate === 0) {
    //   return;
    // } else {
    //   setHeartRate(Math.floor(1500 / rr));
    // }
    setHeartRate(Math.floor(1500 / rr));
  }, [rr]);

  const numbers = [];
  for (let i = 4; i <= 74; i++) {
    numbers.push(i + 1);
  }

  console.log("rr: ", rr);
  console.log("HR: ", heartRate);

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>HR Calculater (R-R)</Card.Title>
        <hr />
        <Card.Text></Card.Text>
        {/* <input
          className="form-control"
          type="number"
          autoComplete="off"
          id="txt_r_r"
          maxLength="4"
          placeholder="Number of Small boxes"
          required
          onKeyUp={calc_hr()}
        /> */}
        <select
          id="rr"
          onChange={handleChange}
          className="form-control"
          style={{ fontSize: "14px" }}
          required
        >
          <option value="">Small boxes</option>
          {numbers.map((number, i) => {
            return (
              <option key={i} value={number}>
                {number}
              </option>
            );
          })}
        </select>

        {heartRate === 0 || heartRate === Infinity ? (
          ""
        ) : (
          <h5 className="text-center mt-2">
            <Badge variant="primary">HR: {heartRate}</Badge>
          </h5>
        )}
      </Card.Body>
    </Card>
  );
};

export default HrCalcTool;
