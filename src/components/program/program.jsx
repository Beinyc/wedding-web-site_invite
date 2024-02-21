import React from 'react';
import './program.css';
import vector from '../images/vector1.png'

export default function Program() {
    return (
        <div className='program'>
            <img className='program__vector' src={vector} alt="дуга" />
            <p className='program__title'>Программа дня</p>
            <ul className='program__list'>
                <li className='program_time'>16:30 - Сбор гостей
                    <p className='program__description'>Парк Зеленый Лог</p>
                </li>
                <li className='program_time' >17:00 - Церемония</li>
                <li className='program_time' >18:00 - Свадебный ужин
                    <p className='program__description'>Время танцев, вкусной еды и любви</p>
                </li>
                <li className='program_time'>00:00 - Заверешние вечера</li>
            </ul>
            <img className='program__vector-2' src={vector} alt="дуга" />
        </div>
    );
};