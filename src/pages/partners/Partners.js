import React from "react";
import { Container } from "react-bootstrap";

import royalCanin from "../../assets/images/royal_canin.png";

import "./style.scss";

const Partners = () => (
  <Container className="partners">
    <img src={royalCanin} alt="royal canin"/>
  </Container>
);

export default Partners;
