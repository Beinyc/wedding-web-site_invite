import React from 'react';
import './bookmark.css'
import bookmarkImage from '../../images/zakladka.png';
import bookMarkImage from '../../images/bookmarkImage.png'

export default function Bookmark() {
    return (
        <div className='bookmark'>
            <div className='bookmark__image-flex'>
                <img className='bookmark__image' src={bookmarkImage} alt="картинка в форме закладки" />
            </div>
           <div className='bookmark__paragraph'>
            <p className='bookmark__text bookmark__text-organizate'>ОРГАНИЗАЦИОННЫЕ МОМЕНТЫ</p>
            <p className='bookmark__text' >Если вы планировали подарить нам букет, то в качестве альтернативы мы были бы очень рады бутылочке вашего любимого вина, это будет ещё одним хорошим поводом встретиться и разделить его вместе.</p> 
            <p className='bookmark__text bookmark__text-phone' >Если у Вас возникнут вопросы, связанные со свадьбой в день торжества, на них ответит наш организатор:</p> 
            <p className='bookmark__text bookmark__text-phone' >Ксения, тел. +7 (900) 900-00-00</p>
           </div>
           <img className='bookmark__image-down' src={bookMarkImage} alt="фото пары" />  
        </div>
    );
};