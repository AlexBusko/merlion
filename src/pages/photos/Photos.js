import React from "react";
import { Carousel } from "react-bootstrap";
import dogo from "../../assets/images/pets/dogo.jpg";
import dog from "../../assets/images/pets/dog.jpg";
import digi from "../../assets/images/pets/digi.jpg";
import sleep from "../../assets/images/pets/sleep.jpg";
import cat from "../../assets/images/pets/cat.jpg";
import kodlo from "../../assets/images/pets/kodlo.jpg";
import chill from "../../assets/images/pets/chill.jpg";
import "./style.scss";

const Photos = () => {
  return (
    <Carousel controls={false} indicators={false} className="photos" >
      <Carousel.Item interval={2500}>
        <img className="photo" src={dogo} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={dog} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={digi} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={sleep} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={cat} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={kodlo} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={chill} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Photos;
