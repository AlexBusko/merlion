import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const FirstAboutUs = () => {
  return (
    <section className="first-aboutus">
      <p>
        Ветеринарна клініка «MERLION» - це сучасний багатопрофільний центр
        ветеринарної медицини, де Вашим домашнім улюбленцям нададуть якісну,
        професійну допомогу та забезпечать відміннний супровід
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

export default FirstAboutUs;