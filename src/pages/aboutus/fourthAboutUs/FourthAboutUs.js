import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const ThirdAboutUs = () => {
  return (
    <section className="fourth-aboutus">
       <p>
        Ми поєднуємо свій досвід у ветеринарній сфері із любов’ю до наших
        Пацієнтів та вірою в те, що доброта є основою ветеринарної медицини.
      </p>
      <FontAwesomeIcon icon={faPaw} className="first-paw"/>
      <FontAwesomeIcon icon={faPaw} className="second-paw"/>
      <FontAwesomeIcon icon={faPaw} className="third-paw"/>
    </section>
  );
};

export default ThirdAboutUs;