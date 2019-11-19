import React, { useState, useEffect } from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";

const QtcCalcTool = () => {
  const [state, setState] = useState({
    rr: "",
    hr: "",
    qt: "",
    qtc: ""
  });

  const [color, setColor] = useState("dark");
  const [animation, setAnimation] = useState("");

  const handleChange = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const hr = Math.round(1500 / state.rr);
    const rrSqrt = Math.sqrt(state.rr * 0.04);
    const qtc = state.qt / rrSqrt;
    const newQtc = Math.round(qtc * 1000);

    setState({ ...state, qtc: newQtc, hr: hr });
    setAnimation("");
  };

  useEffect(() => {
    const qtcColor = qtc => {
      if (qtc < 450) {
        setColor("success");
        setAnimation("animated fadeInDown");
        return;
      }

      if (qtc > 449 && qtc < 500) {
        setColor("warning");
        setAnimation("animated heartBeat");
        return;
      }

      if (qtc > 499) {
        setColor("danger");
        setAnimation("animated heartBeat");
        return;
      }
    };
    qtcColor(state.qtc);
  }, [state]);

  const style = {
    fontSize: "14px",
    marginRight: "5px"
  };

  const numbers = [];
  for (let i = 4; i <= 74; i++) {
    numbers.push(i + 1);
  }

  return (
    <Card className="text-center shadow-sm">
      <Card.Body>
        <Card.Title>QTc Calculater</Card.Title>
        <hr />
        <Card.Text></Card.Text>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col style={{ paddingRight: "5px" }}>
              <select
                id="qt"
                onChange={handleChange}
                className="form-control"
                style={{ fontSize: "14px" }}
                required
              >
                <option value="">Select Qt</option>
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
            </Col>
            <Col style={{ paddingLeft: "5px" }}>
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
            </Col>
          </Row>
          <br />
          <button className="btn btn-primary btn-block">Calculate QTc</button>
        </form>

        {state.qtc === "" ? null : (
          <>
            <hr />
            <div id="display-qtc-results" className="text-center">
              <Badge variant="dark" style={style}>
                HR: {state.hr}
              </Badge>

              <Badge variant="dark" style={style}>
                Qt: {state.qt}
              </Badge>

              <Badge variant={color} className={animation} style={style}>
                Qtc: {state.qtc}
              </Badge>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default QtcCalcTool;
