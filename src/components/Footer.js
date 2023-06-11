import React from 'react';
import 'bulma/css/bulma.css';
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import stackoverflowIcon from '../images/stackoverflow-icon.png';

function Footer() {
    return (
        <div className='is-flex is-justify-content-center p-3'>
            <a href='https://github.com/alyssageria'><img src={githubIcon} className='icons m-3' alt='github-icon'></img></a>
            <a href='https://www.linkedin.com/in/alyssa-geria/'><img src={linkedinIcon} className='icons m-3' alt='linkedin-icon'></img></a>
            <a href='https://stackoverflow.com/users/22057490/alyssa-geria?tab=profile'><img src={stackoverflowIcon} className='icons m-3' alt='stackoverflow-icon'></img></a>
        </div>
    )
}

export default Footer;