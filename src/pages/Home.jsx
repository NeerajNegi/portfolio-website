import React from 'react';
import Intro from '../components/Intro';
import Contact from '../components/Contact';

const Home = () => {
    return(
        <div className="container">
            <div className="info-container">
                <Intro/>
                <Contact />
            </div>
            <div className="work-container"></div>
        </div>
    )
}

export default Home;
