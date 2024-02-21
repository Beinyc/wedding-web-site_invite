import React from 'react';
import './survey.css'

export default function Survey() {
    return (
        <div className='survey'>
            <h5>ПОДТВЕРДИТЕ СВОЕ ПРИСУТСТВИЕ</h5>
            <input type="text" placeholder='Имя и Фамилия'/>
            <p>Придешь ?</p>
            <div>
                <input type="radio"/><p>Да</p>
                <input type="radio"/><p>Нет</p>
            </div>
            <p>Предпочтение по напиткам (можно выбрать несколько вариантов):</p>
            <div>
                <input type="radio"/><p>Шампанское</p>
                <input type="radio"/><p>Белое вино</p>
                <input type="radio"/><p>Красное вино</p>
                <input type="radio"/><p>Красное вино</p>
                <input type="radio"/><p>Коньяк</p>
                <input type="radio"/><p>Водка</p>
                <input type="radio"/><p>Алкоголь не пью</p>
            </div>
            <button>Отправить</button>
        </div>
    );
};