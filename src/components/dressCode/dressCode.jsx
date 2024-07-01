import React, { useEffect, useRef } from 'react';
import './dressCode.css';

import imageDres1 from '../../images/1.png';
import imageDres2 from '../../images/2.png';
import imageDres3 from '../../images/3.png';
import imageDres4 from '../../images/4.png';
import imageDres5 from '../../images/5.png';
import imageDres6 from '../../images/6.png';
import imageDres7 from '../../images/7.png';
import imageDres8 from '../../images/8.png';
import imageDres9 from '../../images/9.png';
import color from '../../images/color.png';

export default function DressCode() {
    const imagesRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 200); // задержка между появлениями
                }
            });
        }, options);

        imagesRef.current.forEach((img) => {
            observer.observe(img);
        });

        return () => {
            imagesRef.current.forEach((img) => {
                observer.unobserve(img);
            });
        };
    }, []);

    return (
        <div className='dress-code'>
            <h4 className='dress-code__title'>Дресс-код</h4>
            <p className='dress-code__paragraph'>Мы будем очень благодарны, если вы поддержите стиль и цвет нашей свадьбы в своих нарядах</p>
            <p className='dress-code__paragraph-down'>Мы собрали немного референсов</p>
            <div className='dress-code__list'>
                {[imageDres1, imageDres2, imageDres3, imageDres4, imageDres5, imageDres6, imageDres7, imageDres8, imageDres9].map((src, index) => (
                    <img
                        key={index}
                        ref={(el) => imagesRef.current[index] = el}
                        className='dress-code__image'
                        src={src}
                        alt={`фото дрес кода ${index + 1}`}
                    />
                ))}
            </div>
            <p className='dress-code__text dress-code__text-girl'>Для девушек: коктейльные наряды</p>
            <p className='dress-code__text dress-code__text-boy'>Для мужчин: костюм, рубашки туфли</p>
            <p className='dress-code__text dress-code__text-color'>Цветовая палитра:</p>
            <img className='dress-code__image-color' src={color} alt="цветовая палитра" />
        </div>
    );
};
