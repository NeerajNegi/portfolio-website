import React from 'react';

import arrowLeft from '../assets/arrow-left-circle.svg';
import arrowRight from '../assets/arrow-right-circle.svg';

const Carousel = () => {
    return(
        <div className="carousel-container">
            <button className="transparent-btn">
                <img src={arrowLeft} alt="arrow-left"/>
            </button>
            <p>Experience</p>
            <button className="transparent-btn">
                <img src={arrowRight} alt="arrow-right"/>
            </button>
        </div>
    )
}

export default Carousel;
