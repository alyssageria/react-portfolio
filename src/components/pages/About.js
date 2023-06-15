import React from 'react';
import 'bulma/css/bulma.css';
import profilePicture from '../../images/profile-pic.png'

function About() {
    return (
        <div className='about'>
            <div className='about-me columns'>
                <div className='about-text column is-two-fifths'>
                    <h1 className='is-size-2 pb-5'>About Me</h1>
                    <p className='is-size-4'>Hi! <br></br> My name is Alyssa Geria, and I am a full stack web developer. I am from Orange County, California and I have a educational background in Psychology. I am passionate about creating user-centric websites and furthering my understanding of web devlopment in order to improve my skillset.</p>
                </div>
                <div className='column is-two-fifths has-text-centered'>
                    <img src={profilePicture} className='profile-pic' alt='my-pic'></img>
                </div>
            </div>
        </div>
    )
}

export default About;