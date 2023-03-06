import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <h4 className="about-header">About Officeboxd</h4>
            <a className="repo-link" href="https://github.com/SeanKim912/Officeboxd">GitHub Repository</a>
            <h4 className="about-header"><i class="fa-brands fa-github fa-2xl"></i>Contact Me</h4>
            <a className='repo-link' href="https://github.com/SeanKim912">Sean H. Kim</a>
        </div>
    )
}

export default Footer;
