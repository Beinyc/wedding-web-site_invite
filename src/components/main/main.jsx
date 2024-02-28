import React from 'react';
import './main.css';
import mainImage from '../../images/main.jpg'

export default function Main() {
    return (
        <div className='main'>
           <div className='main__flex-text'>
                <p className='main__text'>Мы приглашаем вас на нашу свадьбу</p>
                <p className='main__paragraph'>Будем счастливы с вами разделить этот день вместе с вами</p>
                <p className='main__date'>29.03.2024</p> 
           </div>
           <div className='main__flex-image'>
                <img src={mainImage} alt="фото пары"  className='main__image'/>
           </div>
        </div>
    );
};