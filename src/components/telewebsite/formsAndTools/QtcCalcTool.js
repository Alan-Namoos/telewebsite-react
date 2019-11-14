import React from "react";
import { Card } from "react-bootstrap";

const QtcCalcTool = () => {
  const qtc_calc = () => {};
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>QTc Calculater</Card.Title>
        <hr />
        <Card.Text></Card.Text>
        <label htmlFor="sel_qt_calc">QT (Sec):</label>
        <select id="sel_qt_calc" onChange={qtc_calc}>
          <option value="0.28">0.28</option>
          <option value="0.30">0.30</option>
          <option value="0.32">0.32</option>
          <option value="0.34">0.34</option>
          <option value="0.36">0.36</option>
          <option value="0.38">0.38</option>
          <option value="0.40">0.40</option>
          <option value="0.42">0.42</option>
          <option value="0.44">0.44</option>
          <option value="0.46">0.46</option>
          <option value="0.48">0.48</option>
          <option value="0.50">0.50</option>
          <option value="0.52">0.52</option>
          <option value="0.54">0.54</option>
          <option value="0.56">0.56</option>
        </select>
        <br />
        <input
          type="number"
          className="form-control"
          id="txt_qtc_calc"
          placeholder="Number of Small boxes"
          required
          onKeyUp={qtc_calc}
        />
        <br />
        <div id="qtc_calc_row4" className="text-center">
          <span
            style={{ fontSize: "14px" }}
            className="badge badge-dark"
            id="hr_cal"
          ></span>
          <span
            style={{ fontSize: "14px" }}
            className="badge badge-dark"
            id="qt_cal"
          ></span>
          <span
            style={{ fontSize: "14px" }}
            className="badge"
            id="qtc_cal"
          ></span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QtcCalcTool;
