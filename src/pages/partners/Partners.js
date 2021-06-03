import React from "react";
import { Container } from "react-bootstrap";

import royalCanin from "../../assets/images/royal_canin.jpg";

import "./style.scss";

const Partners = () => (
  <Container className="partners">
    <a href="https://www.royalcanin.com/ua">
      <img src={royalCanin} alt="royal canin" />
    </a>
  </Container>
);

export default Partners;
