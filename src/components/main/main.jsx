import React from "react";
import "./main.css";
import mainImage from "../../images/main.jpg";

export default function Main() {
  return (
    <div className="main__bacground">
      <div className="main">
        <div className="main__flex-text">
          <p className="main__text main__margin-zero">
            Мы приглашаем вас на нашу свадьбу
          </p>
          <p className="main__paragraph main__margin-zero">
            Будем счастливы с вами разделить этот день вместе с вами
          </p>
          <p className="main__date main__margin-zero">29.03.2024</p>
        </div>
        <img src={mainImage} alt="фото пары" className="main__image" />
      </div>
    </div>
  );
}
