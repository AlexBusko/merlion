import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const ThirdAboutUs = () => {
  return (
    <section className="third-aboutus" >
      <p>
        В своїй діяльності ми використовуємо інноваційні методи діагностики та
        лікування, високотехнологічне обладнання, прагнемо дотримуватися
        найвищих медичних стандартів і постійно шукаємо нові та сучасні способи
        та методи лікування наших Пацієнтів.
      </p>
      <FontAwesomeIcon icon={faPaw} className="first-paw"/>
      <FontAwesomeIcon icon={faPaw} className="second-paw"/>
      <FontAwesomeIcon icon={faPaw} className="third-paw"/>
      <FontAwesomeIcon icon={faPaw} className="fourth-paw"/>
      <FontAwesomeIcon icon={faPaw} className="fifth-paw"/>
      <FontAwesomeIcon icon={faPaw} className="sixth-paw"/>
</section>
  );
};

export default ThirdAboutUs;