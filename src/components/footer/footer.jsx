import React from 'react';
import './footer.css'
import folow from '../images/folow.png'

export default function Footer() {
    return (
        <div className='footer'>
           <p className='footer__text'>БУДЕМ РАДЫ ВИДЕТЬ</p>
           <p>ВАС НА ТОРЖЕСТВЕ</p>
           <p>ВАШИ АВГУСТ И НАТАЛЬЯ</p>
           <img src={folow} alt="черное сердечко" />
        </div>
    );
};