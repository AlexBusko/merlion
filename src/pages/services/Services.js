import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faStethoscope,
  faSyringe,

} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Scalpel } from "../../assets/icons/scalpel.svg";
import { ReactComponent as Ultrasound } from "../../assets/icons/ultrasound.svg";
import { ReactComponent as Gastroscope} from "../../assets/icons/gastroscope.svg";
import "./style.scss";

const Services = () => {
  return (
    <Container fluid className="services">
      <Row sm={2} lg={3}>
        <Col className="service-card" style={{ background: "#2398AB" }}>
          <FontAwesomeIcon className="icon" icon={faStethoscope} />
          <div className="service-info">
            <h2>Діагностика</h2>
            <p>Апаратні дослідження стану здоров'я</p>
          </div>
        </Col>
        <Col className="service-card" style={{ background: "#d2a509" }}>
          <FontAwesomeIcon className="icon" icon={faSyringe} />
          <div className="service-info">
            <h2>Лікування</h2>
            <p>Заходи кваліфікованої ветеринарної допомоги</p>
          </div>
        </Col>
        <Col className="service-card" style={{ background: "#FA8334" }}>
          <Ultrasound className="icon ultrasound" />
          <div className="service-info">
            <h2>УЗД</h2>
            <p>
            Ультразвукова діагностика захворювання
            </p>
          </div>
        </Col>
        <Col className="service-card" style={{ background: "#0C8346" }}>
          <Scalpel className="icon" />
          <div className="service-info">
            <h2>Хірургія</h2>
            <p>Оперативні лікування захворювань</p>
          </div>
        </Col>
        <Col className="service-card" style={{ background: "#EF5D60" }}>
        <Gastroscope className="icon gastroscope" />
          <div className="service-info">
            <h2>Гастроскопія</h2>
            <p>Ендоскопічне дослідження верхніх відділів шлунково-кишкового тракту </p>
          </div>
        </Col>
        <Col className="service-card" style={{ background: "#B10361" }}>
          <FontAwesomeIcon className="icon" icon={faHospital} />
          <div className="service-info">
            <h2>Стаціонар</h2>
            <p>Стаціонарне лікування тварин та перетримка</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
