import React from 'react';
import './survey.css'

export default function Survey() {
    return (
        <div className='survey'>
            <h5 className='survey__text'>ПОДТВЕРДИТЕ СВОЕ ПРИСУТСТВИЕ</h5>
            <form action="#">
            <input className='survey__input-text' type="text" placeholder='Имя и Фамилия'/>
            <p className='survey__text-go'>Придешь ?</p>
            <div className='survey__list'>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="radio" name="radAnswer"/><p className='survey__radio-text'>Да</p>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__radio' type="radio" name="radAnswer"/><p className='survey__radio-text'>Нет</p>
                </div>
            </div>
            <p className='survey__text'>Предпочтение по напиткам (можно выбрать несколько вариантов):</p>
            <div className='survey__list'>
                <div className='survey__flex-list'>
                    <input className='survey__checkbox' type="checkbox"/>
                    <label htmlFor="">Шампанское</label>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__checkbox' type="checkbox"/>
                    <label htmlFor="">Белое вино</label>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__checkbox' type="checkbox"/>
                    <label htmlFor="">Виски</label>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__checkbox' type="checkbox"/>
                    <label htmlFor="">Красное вино</label>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__checkbox' type="checkbox"/>
                    <label htmlFor="">Коньяк</label>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__checkbox' type="checkbox"/>
                    <label htmlFor="">Водка</label>
                </div>
                <div className='survey__flex-list'>
                    <input className='survey__checkbox' type="checkbox"/>
                    <label htmlFor="">Алкоголь не пью</label>
                </div>
            </div>
            <button className='survey__button' type='submite'>Отправить</button>
            </form>
        </div>
    );
};