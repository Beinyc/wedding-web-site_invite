import React from 'react';
import './survey.css'

export default function Survey() {
    return (
        <div className='survey'>
            <h5>ПОДТВЕРДИТЕ СВОЕ ПРИСУТСТВИЕ</h5>
            <input type="text" placeholder='Имя и Фамилия'/>
            <p>Придешь ?</p>
            <div className='survey__list'>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="radio"/><p className='survey__radio-text'>Да</p>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="radio"/><p className='survey__radio-text'>Нет</p>
                </div>
            </div>
            <p>Предпочтение по напиткам (можно выбрать несколько вариантов):</p>
            <div className='survey__list'>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="checkbox"/><p className='survey__radio-text'>Шампанское</p>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="checkbox"/><p className='survey__radio-text'>Белое вино</p>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="checkbox"/><p className='survey__radio-text'>Красное вино</p>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="checkbox"/><p className='survey__radio-text'>Красное вино</p>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="checkbox"/><p className='survey__radio-text'>Коньяк</p>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="checkbox"/><p className='survey__radio-text'>Водка</p>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="checkbox"/><p className='survey__radio-text'>Алкоголь не пью</p>
                </div>
            </div>
            <button>Отправить</button>
        </div>
    );
};