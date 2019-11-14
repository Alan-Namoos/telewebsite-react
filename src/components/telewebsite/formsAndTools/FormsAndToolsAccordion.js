import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import TeleForms from "./TeleForms";
import QtcCalcTool from "./QtcCalcTool";
import HrCalcTool from "./HrCalcTool";
const FormsAndToolsAccordion = () => {
  return (
    <Accordion className="text-center">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            FORMS
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <TeleForms />
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            QTc Calculater
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <QtcCalcTool />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            HR Calculater
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <HrCalcTool />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default FormsAndToolsAccordion;
