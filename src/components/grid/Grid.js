import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.scss";

const Grid = ({first, second}) => {
  return (
    <Container fluid>
      <Row className="grid" xl={2}>
        <Col className="wrapper">
            {first}
        </Col>
        <Col className="wrapper">
            {second}
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;
