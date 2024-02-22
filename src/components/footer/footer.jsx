import React from 'react';
import './footer.css'
import folow from '../../images/folow.png'

export default function Footer() {
    return (
        <div className='footer'>
           <p className='footer__text'>БУДЕМ РАДЫ ВИДЕТЬ</p>
           <p className='footer__text'>ВАС НА ТОРЖЕСТВЕ</p>
           <p className='footer__text'>ВАШИ АВГУСТ И НАТАЛЬЯ</p>
           <img className='footer__image' src={folow} alt="черное сердечко" />
        </div>
    );
};