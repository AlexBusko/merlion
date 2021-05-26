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
            <h4 className="attention">Прийом за попереднім записом</h4>
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
                  <h4>+380 67 657 12 03</h4>
                </div>
              </div>
              <div className="info-box">
                <Envelope className="info-icon" />
                <div>
                  <h5>Email:</h5>
                  <h4>vetmerlion@gmail.com</h4>
                </div>
              </div>
              <div className="social-media">
                <a href="https://www.facebook.com/%D0%92%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D0%B0-%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B0-Merlion-106631318234180">
                  <Facebook />
                </a>
                <a href="https://instagram.com/merlion.clinic?utm_medium=copy_link">
                  <Instagram />
                </a>
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
