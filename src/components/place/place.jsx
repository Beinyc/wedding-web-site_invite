import React from 'react';
import './place.css'

export default function Place() {
    return (
        <div className='place'>
            <h3 className='place__title'>Место свадьбы</h3>
            <p className='place__paragraph'>Ресторан Panorama lounge, микрорайон Жукова, 29Бс1</p>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd28c58dea1670573bf263199e754eac023dd3b00ea4d7b38b60907fcc7a3b22&amp;source=constructor" width="400" height="400" frameborder="0"></iframe>
        </div>
    );
};