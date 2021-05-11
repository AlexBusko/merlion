import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <p className="first">
        Ветеринарна клініка «MERLION» - це сучасний багатопрофільний центр
        ветеринарної медицини, де Вашим домашнім улюбленцям нададуть якісну,
        професійну допомогу та забезпечать відміннний супровід
      </p>
      <p className="second">
        Ми надаємо повний комплекс ветеринарних послуг: лабораторна діагностика,
        терапія, хірургія, вакцинація, ветеринарна стоматологія, УЗД,
        гастроскопія, післяопераційна реабілітація в стаціонарі.
      </p>
      <p className="third">
        В своїй діяльності ми використовуємо інноваційні методи діагностики та
        лікування, високотехнологічне обладнання, прагнемо дотримуватися
        найвищих медичних стандартів і постійно шукаємо нові та сучасні способи
        та методи лікування наших Пацієнтів.
      </p>
      <p className="fourth">
        Ми поєднуємо свій досвід у ветеринарній сфері із любов’ю до наших
        Пацієнтів та вірою в те, що доброта є основою ветеринарної медицини.
      </p>
      <FontAwesomeIcon icon={faPaw} className="first-paw"/>
      <FontAwesomeIcon icon={faPaw} className="second-paw"/>
      <FontAwesomeIcon icon={faPaw} className="third-paw"/>
      <FontAwesomeIcon icon={faPaw} className="fourth-paw"/>
      <FontAwesomeIcon icon={faPaw} className="fifth-paw"/>

    </section>
  );
};

export default AboutUs;
