import React from 'react';
import './program.css';
import vector from '../../images/vector1.png'

export default function Program() {
    return (
        <div className='program'>
            <img className='program__vector' src={vector} alt="дуга" />
            <p className='program__title'>Программа дня</p>
            <div>
                <div className='program__time-flex'>
                    <p className='program__time'>16:30</p>
                    <p className='program__dash'>—</p>
                    <div className='program__item-flex'>
                        <p className='program__margin-zero program__paragraph-up'>Сбор гостей</p>
                        <p className='program__margin-zero program__paragraph-down'>Парк Зеленый Лог</p>
                    </div>
                </div>
                <div className='program__time-flex'>
                    <p className='program__time'>17:00</p>
                    <p className='program__dash'>—</p>
                    <div className='program__item-flex'>
                        <p className='program__margin-zero program__paragraph-up'>Церемония</p>
                    </div>
                </div>
                <div className='program__time-flex'>
                    <p className='program__time'>18:00</p>
                    <p className='program__dash'>—</p>
                    <div className='program__item-flex'>
                        <p className='program__margin-zero program__paragraph-up'>Свадебный ужин</p>
                        <p className='program__margin-zero program__paragraph-down'>Время танцев, вкусной еды и любви</p>
                    </div>
                </div>
                <div className='program__time-flex'>
                    <p className='program__time'>00:00</p>
                    <p className='program__dash'>—</p>
                    <div className='program__item-flex'>
                        <p className='program__margin-zero program__paragraph-up'>Заверешние вечера</p>
                    </div>
                </div>
            </div>
            <img className='program__vector-2' src={vector} alt="дуга" />
        </div>
    );
};