import React, { useContext } from "react";
import { TransferLogContext } from "../contexts/TransferLogContext";
import TransferLogTable from "./transferLog/TransferLogTable";
import TransferLogForm from "./transferLog/TransferLogForm";
import { Container, Row, Col } from "react-bootstrap";

const EDAdmissionLog = () => {
  const { transferLogs } = useContext(TransferLogContext);

  return (
    <>
      <Container>
        <h4 className="text-center">{transferLogs.length} Admits so far</h4>
        <Row>
          <Col sm={9} className="mt-4">
            {transferLogs.length === 0 ? "No Records" : <TransferLogTable />}
          </Col>
          <Col sm={3}>
            <TransferLogForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EDAdmissionLog;
