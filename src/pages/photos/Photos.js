import React from "react";
import { Carousel } from "react-bootstrap";
import dogo from "../../assets/images/pets/IMG_8245.jpg";
import dog from "../../assets/images/pets/IMG_6845.jpg";
import digi from "../../assets/images/pets/IMG_7257.jpg";
import sleep from "../../assets/images/pets/sleep.jpg";
import cat from "../../assets/images/pets/IMG_6310.jpg";
import kodlo from "../../assets/images/pets/IMG_7249.jpg";
import chill from "../../assets/images/pets/IMG_8119.jpg";
import "./style.scss";

const Photos = () => {
  return (
    <Carousel controls={false} indicators={false} className="photos">
      <Carousel.Item interval={2500}>
        <img
          className="photo"
          src={dogo}
          alt="awesome white dog on veterenary table"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={dog} alt="black dog stand on table" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={digi} alt="awesome dog wait for surgery" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={sleep} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={cat} alt="cat in the veterenary box" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="photo" src={kodlo} alt="five cute wihite dogs" />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="photo"
          src={chill}
          alt="the dog is sleeping after surgery"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Photos;
