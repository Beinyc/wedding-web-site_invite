import React, { useEffect, useRef } from "react";
import "./program.css";
import vector from "../../images/vector1.png";

export default function Program() {
  const programRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const program = programRef.current;
      const rect = program.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        program.classList.add("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="program" ref={programRef}>
      <img className="program__vector" src={vector} alt="дуга" />
      <div className="program__flex">
        <p className="program__title">Программа дня</p>
        <div className="program__list-flex">
          <div className="program__time-flex">
            <p className="program__time">16:30</p>
            <p className="program__dash">—</p>
            <div className="program__item-flex">
              <p className="program__margin-zero program__paragraph-up">
                Сбор гостей
              </p>
              <p className="program__margin-zero program__paragraph-down">
                Парк Зеленый Лог
              </p>
            </div>
          </div>
          <div className="program__time-flex">
            <p className="program__time">17:00</p>
            <p className="program__dash">—</p>
            <div className="program__item-flex">
              <p className="program__margin-zero program__paragraph-up">
                Церемония
              </p>
            </div>
          </div>
          <div className="program__time-flex">
            <p className="program__time">18:00</p>
            <p className="program__dash">—</p>
            <div className="program__item-flex">
              <p className="program__margin-zero program__paragraph-up">
                Свадебный ужин
              </p>
              <p className="program__margin-zero program__paragraph-down">
                Время танцев, вкусной еды и любви
              </p>
            </div>
          </div>
          <div className="program__time-flex">
            <p className="program__time">00:00</p>
            <p className="program__dash">—</p>
            <div className="program__item-flex">
              <p className="program__margin-zero program__paragraph-up">
                Завершение вечера
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="program__vector-2" src={vector} alt="дуга" />
    </div>
  );
}
