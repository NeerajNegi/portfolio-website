import React from 'react';

import NeerajNegi from '../assets/neerajnegi.JPG';
import mail from '../assets/mail.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
const Contact = () => {
    return (
        <div className="contacts">
            <div className="display-picture">
                <img src={NeerajNegi} alt="neeraj-negi"/>
            </div>
            <div className="links">
                <a className="link-item" target="_blank" rel="noopener noreferrer" href="mailto: neeraj.negi174@gmail.com"><img src={mail} alt="gmail"/></a>
                <a className="link-item" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/iamneerajnegi/"><img src={linkedin} alt="linkedin"/></a>
                <a className="link-item" target="_blank" rel="noopener noreferrer" href="https://github.com/neerajnegi"><img src={github} alt="github"/></a>
            </div>
        </div>
    )
}

export default Contact;