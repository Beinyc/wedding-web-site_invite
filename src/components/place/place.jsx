import React from "react";
import "./place.css";

export default function Place() {
  return (
    <div className="place__background">
      <div className="place">
        <div className="place__text-flex">
          <h3 className="place__title">Место свадьбы</h3>
          <p className="place__paragraph">
            Ресторан Panorama lounge, микрорайон Жукова, 29Бс1
          </p>
        </div>
        <div className="place-flex">
          <iframe
            className="place__map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd28c58dea1670573bf263199e754eac023dd3b00ea4d7b38b60907fcc7a3b22&amp;source=constructor"
            width="350"
            height="350"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
