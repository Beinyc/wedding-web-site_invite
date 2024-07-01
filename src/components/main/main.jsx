import React, { useEffect, useRef } from "react";
import "./main.css";
import mainImage from "../../images/main.jpg";

export default function Main() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef.current;
      const rect = image.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        image.classList.add("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <img src={mainImage} alt="фото пары" className="main__image" ref={imageRef} />
      </div>
    </div>
  );
}
