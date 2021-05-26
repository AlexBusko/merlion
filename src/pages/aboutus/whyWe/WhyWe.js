import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const WhyWe = () => {
  return (
    <section className="whywe">
      <div>
        <h2>Чому ми?</h2>
        <ul>
          <li>
            висококваліфіковані спеціалісти, які постійно вдосконалюються;
          </li>
          <li>доступні ціни;</li>
          <li>індивідуальний підхід;</li>
          <li>методи нашого лікування засновані на доказовій медицині;</li>
          <li>онлайн консультація 24/7;</li>
          <li>працюємо 24/7;</li>
          <li>програма лояльності для постійних пацієнтів.</li>
        </ul>
      </div>
      <FontAwesomeIcon icon={faPaw} className="first-paw"/>
      <FontAwesomeIcon icon={faPaw} className="second-paw"/>
      <FontAwesomeIcon icon={faPaw} className="third-paw"/>
      <FontAwesomeIcon icon={faPaw} className="fourth-paw"/>
      <FontAwesomeIcon icon={faPaw} className="fifth-paw"/>
    </section>
  );
};

export default WhyWe;
