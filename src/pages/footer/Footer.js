import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";

const Footer = () => {
  return (
    <Container fluid className="footer">
        <Container className="wrapper">
            <div><span>Copyright 2021</span></div>
            <div><span>convalia.digital</span></div>
        </Container>
    </Container>
  );
};

export default Footer;