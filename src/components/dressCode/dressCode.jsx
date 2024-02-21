import React from 'react';
import './dressCode.css'

import imageDres1 from '../images/1.png';
import imageDres2 from '../images/2.png';
import imageDres3 from '../images/3.png';
import imageDres4 from '../images/4.png';
import imageDres5 from '../images/5.png';
import imageDres6 from '../images/6.png';
import imageDres7 from '../images/7.png';
import imageDres8 from '../images/8.png';
import imageDres9 from '../images/9.png';
import color from '../images/color.png'

export default function DressCode() {
    return (
        <div className='dress-code'>
           <h4 className='dress-code__title;'>Дресс-код</h4>
           <p className='dress-code__paragraph'>Мы будем очень благодарны, если вы поддержите стиль и цвет нашей свадьбы в своих нарядах</p>
           <p className='dress-code__paragraph-down'>Мы собрали немного референсов</p>
            <div className='dress-code__list'>
                <img className='dress-code__image' src={imageDres1} alt="фото дрес кода"/>
                <img className='dress-code__image' src={imageDres2} alt="фото дрес кода"/>
                <img className='dress-code__image' src={imageDres3} alt="фото дрес кода"/>
                <img className='dress-code__image' src={imageDres4} alt="фото дрес кода"/>
                <img className='dress-code__image' src={imageDres5} alt="фото дрес кода"/>
                <img className='dress-code__image' src={imageDres6} alt="фото дрес кода"/>
                <img className='dress-code__image' src={imageDres7} alt="фото дрес кода"/>
                <img className='dress-code__image' src={imageDres8} alt="фото дрес кода"/>
                <img className='dress-code__image' src={imageDres9} alt="фото дрес кода"/>
            </div>
            <p>Для девушек: коктейльные наряды</p>
            <p>Для мужчин: костюм, рубашки туфли</p>
            <p>Цветовая палитра:</p>
            <img className='dress-code__image-color' src={color} alt="цветовая палитра" />
        </div>
    );
};