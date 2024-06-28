import React, { useState } from 'react';
import './survey.css'

export default function Survey() {
    const [isComing, setIsComing] = useState(null);
    const [noAlcohol, setNoAlcohol] = useState(false);
    const [nameFilled, setNameFilled] = useState(false);

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsComing(value === 'yes');
        setNoAlcohol(false); // сбросить выбор "Алкоголь не пью", если изменится ответ на радиокнопку
    };

    const handleCheckboxChange = (event) => {
        if (event.target.name === 'noAlcohol') {
            setNoAlcohol(event.target.checked);
        }
    };

    const handleNameChange = (event) => {
        setNameFilled(event.target.value.trim() !== '');
    };

    return (
        <div className='survey'>
            <h5 className='survey__title'>ПОДТВЕРДИТЕ СВОЕ ПРИСУТСТВИЕ</h5>
            <form className='survey__form' action="#">
                <input 
                    className='survey__input-text' 
                    type="text" 
                    placeholder='Имя и Фамилия' 
                    onChange={handleNameChange}
                />
                <div className={`survey__form-rsvp ${nameFilled ? 'survey__list-visible' : 'survey__list-hidden'}`}>
                    <p className='survey__text-go'>Придешь ?</p>
                    <div className='survey__list'>
                        <div className='survey__flex-list'>
                            <input 
                                className='survey__radio' 
                                type="radio" 
                                name="radAnswer" 
                                value="yes" 
                                onChange={handleRadioChange}
                            />
                            <p className='survey__radio-text'>Да</p>
                        </div>
                        <div className='survey__flex-list'>
                            <input 
                                className='survey__radio' 
                                type="radio" 
                                name="radAnswer" 
                                value="no" 
                                onChange={handleRadioChange}
                            />
                            <p className='survey__radio-text'>Нет</p>
                        </div>
                    </div>
                </div>
                <div className={`survey__form-alcohol ${isComing === null || !isComing ? 'survey__list-hidden' : 'survey__list-visible'}`}>
                    {isComing && (
                        <>
                            <p className='survey__text'>Предпочтение по напиткам (можно выбрать несколько вариантов):</p>
                            <div className={`survey__list ${noAlcohol ? 'survey__list-hidden' : 'survey__list-visible'}`}>
                                <div className='survey__flex-list'>
                                    <input className='survey__checkbox' type="checkbox"/>
                                    <label>Шампанское</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input className='survey__checkbox' type="checkbox"/>
                                    <label>Белое вино</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input className='survey__checkbox' type="checkbox"/>
                                    <label>Виски</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input className='survey__checkbox' type="checkbox"/>
                                    <label>Красное вино</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input className='survey__checkbox' type="checkbox"/>
                                    <label>Коньяк</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input className='survey__checkbox' type="checkbox"/>
                                    <label>Водка</label>
                                </div>
                            </div>
                            <div className='survey__flex-list'>
                                <input 
                                    className='survey__checkbox' 
                                    type="checkbox" 
                                    name="noAlcohol" 
                                    checked={noAlcohol} 
                                    onChange={handleCheckboxChange}
                                />
                                <label>Алкоголь не пью</label>
                            </div>
                        </>
                    )}
                </div>
                <button className='survey__button' type='submit'>Отправить</button>
            </form>
        </div>
    );
};
