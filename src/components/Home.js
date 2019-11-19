import React from "react";
import QtcGrid from "./telewebsite/qtcGrid/QtcGrid";
import FormsAndToolsAccordion from "./telewebsite/formsAndTools/FormsAndToolsAccordion";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xl={8}>
            <h3 className="text-center">QTc Grid</h3>
            <QtcGrid />
          </Col>
          <Col xl={4}>
            <h3 className="text-center">Forms & Tools</h3>
            <FormsAndToolsAccordion />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
