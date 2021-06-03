import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as MerlionLogo } from "../../assets/icons/merlion_logo.svg";
import "./style.scss";

const Home = () => {
  return (
    <Container fluid className="home">
      <Container>
        <Row className="home-row">
          <Col md={5} className="home-col">
            <MerlionLogo className="logo" />
          </Col>
          <Col md={5} className="home-col">
            <div>
              <h1 className="text-logo">MERLION</h1>
              <h4>Ветеринарна клініка</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
