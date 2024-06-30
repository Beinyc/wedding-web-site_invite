import React, { useState } from 'react';
import './survey.css';

export default function Survey() {
    const [isComing, setIsComing] = useState(null);
    const [noAlcohol, setNoAlcohol] = useState(false);
    const [nameFilled, setNameFilled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        radAnswer: '',
        drinks: {
            champagne: false,
            whiteWine: false,
            whiskey: false,
            redWine: false,
            cognac: false,
            vodka: false,
            noAlcohol: false,
        },
    });

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsComing(value === 'yes');
        setFormData((prevData) => ({
            ...prevData,
            radAnswer: value,
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            drinks: {
                ...prevData.drinks,
                [name]: checked,
            },
        }));
        if (name === 'noAlcohol') {
            setNoAlcohol(checked);
        }
    };

    const handleNameChange = (event) => {
        const value = event.target.value;
        const isFilled = value.trim() !== '';
        setNameFilled(isFilled);
        setFormData((prevData) => ({
            ...prevData,
            name: value,
        }));
        if (!isFilled) {
            setIsComing(null);
            setNoAlcohol(false);
            setFormData((prevData) => ({
                ...prevData,
                radAnswer: '',
                drinks: {
                    champagne: false,
                    whiteWine: false,
                    whiskey: false,
                    redWine: false,
                    cognac: false,
                    vodka: false,
                    noAlcohol: false,
                },
            }));
        }
    };

    const handleNameKeyPress = (event) => {
        const charCode = event.charCode;
        const charStr = String.fromCharCode(charCode);
        if (!/^[a-zA-Zа-яА-Я ]+$/.test(charStr)) {
            event.preventDefault();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // предотвратить перезагрузку страницы
        console.log('Форма отправлена', formData); // можно здесь добавить логику обработки данных формы
    };

    const isFormValid = nameFilled && formData.radAnswer !== '';

    return (
        <div className='survey'>
            <h5 className='survey__text'>ПОДТВЕРДИТЕ СВОЕ ПРИСУТСТВИЕ</h5>
            <form className='survey__form' onSubmit={handleSubmit}>
                <input 
                    className='survey__input-text' 
                    type="text" 
                    placeholder='Имя и Фамилия' 
                    value={formData.name}
                    onChange={handleNameChange}
                    onKeyPress={handleNameKeyPress}
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
                                checked={formData.radAnswer === 'yes'}
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
                                checked={formData.radAnswer === 'no'}
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
                                    <input 
                                        className='survey__checkbox' 
                                        type="checkbox" 
                                        name="champagne"
                                        checked={formData.drinks.champagne}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label>Шампанское</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input 
                                        className='survey__checkbox' 
                                        type="checkbox" 
                                        name="whiteWine"
                                        checked={formData.drinks.whiteWine}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label>Белое вино</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input 
                                        className='survey__checkbox' 
                                        type="checkbox" 
                                        name="whiskey"
                                        checked={formData.drinks.whiskey}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label>Виски</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input 
                                        className='survey__checkbox' 
                                        type="checkbox" 
                                        name="redWine"
                                        checked={formData.drinks.redWine}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label>Красное вино</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input 
                                        className='survey__checkbox' 
                                        type="checkbox" 
                                        name="cognac"
                                        checked={formData.drinks.cognac}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label>Коньяк</label>
                                </div>
                                <div className='survey__flex-list'>
                                    <input 
                                        className='survey__checkbox' 
                                        type="checkbox" 
                                        name="vodka"
                                        checked={formData.drinks.vodka}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label>Водка</label>
                                </div>
                            </div>
                            <div className='survey__flex-list'>
                                <input 
                                    className='survey__checkbox' 
                                    type="checkbox" 
                                    name="noAlcohol" 
                                    checked={formData.drinks.noAlcohol} 
                                    onChange={handleCheckboxChange}
                                />
                                <label>Алкоголь не пью</label>
                            </div>
                        </>
                    )}
                </div>
                <button 
                    className={`survey__button ${isFormValid ? '' : 'survey__button-disabled'}`} 
                    type='submit'
                    disabled={!isFormValid}
                >
                    Отправить
                </button>
            </form>
        </div>
    );
};