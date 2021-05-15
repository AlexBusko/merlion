import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { ReactComponent as MerlionLogo } from "../../assets/icons/merlion_logo.svg";
import { List } from "react-bootstrap-icons";
import "./style.scss";

import { Facebook, Instagram } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Link to="home" smooth duration={500} offset={-100}>
          <Navbar.Brand>
            <MerlionLogo style={{ width: "50px", height: "50px" }} />
            <h1>MERLION</h1>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          children={<List className="burger-icon" />}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link>
              <Link to="whywe" smooth duration={500} offset={-100}>
                Про нас
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="services" smooth duration={500} offset={-100}>
                Послуги
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contacts" smooth duration={500} offset={-100}>
                Контакти
              </Link>
            </Nav.Link>
            <div className="head-social-media">
              <a href="">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/nazar.kashlyak">
                <Facebook />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
