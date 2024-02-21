import React from 'react';
import './header.css'
import headerImage from '../images/1666127537_13-mykaleidoscope-ru-p-vlyublennaya-para-krasivo-15.jpg'

export default function Header() {
    return (
        <div className='header'>
            <img src={headerImage} alt="фото пары"  className='header__image'/>
            <div className='header__title'>
                <h1 className='header__name'>Август и Наталья</h1>
                <p className='header__date'>29.03.2024</p>
            </div>
        </div>
    );
};