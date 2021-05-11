import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../../components/map/Maps";
import "./style.scss";

import {
  GeoAlt,
  Phone,
  Envelope,
  Facebook,
  Instagram,
} from "react-bootstrap-icons";

const Contacts = () => {
  return (
    <Container fluid className="contacts">
      <Container>
        <Row className="justify-content-md-around">
          <Col md={5}>
            <div className="info">
              <div className="info-box">
                <GeoAlt className="info-icon" />
                <div>
                  <h5>Адреса:</h5>
                  <h4>м. Львів, вул. Плугова 10</h4>
                </div>
              </div>
              <div className="info-box">
                <Phone className="info-icon" />
                <div>
                  <h5>Телефон:</h5>
                  <h4>+380 95 139 39 68</h4>
                </div>
              </div>
              <div className="info-box">
                <Envelope className="info-icon" />
                <div>
                  <h5>Email:</h5>
                  <h4>merlion@gmail.com</h4>
                </div>
              </div>
              <div className="social-media">
                <Facebook />
                <Instagram />
              </div>
            </div>
          </Col>
          <Col md={5}>
            <Map />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contacts;
