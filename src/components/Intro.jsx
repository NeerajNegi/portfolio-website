import React from 'react';

const Intro = () => {
    return(
        <div>
            <div className="header">
                <h1>Hello, I'm</h1>
                <h1>Neeraj Negi</h1>
            </div>
            <div className="description">
                <p>I’m a Software Developer currently working as Front End Developer at <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.softway.com/">Softway</a>. 
                I mostly work as front end developer with <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://angular.io/">Angular 2+</a> and <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React.js</a>. 
                I also have experience working with <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://reactnative.dev/">React-Native</a>, <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/">Node.js</a> , 
                <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://expressjs.com/">Express</a> and <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/">MongoDB</a>.
                </p>
            </div>
        </div>
    )
}

export default Intro;