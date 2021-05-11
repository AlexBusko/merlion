import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import darkMerlion from "../../assets/images/dark_merlion_logo.png"
import "./style.scss";

const Home = () => {
  return (
    <Container fluid className="home">
      <Container>
        <Row className="home-row">
          <Col md={5} className="home-col">
            <img className="logo" src={darkMerlion}  alt="merlion"/>
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
