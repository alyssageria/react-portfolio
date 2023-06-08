import React from 'react';
import 'bulma/css/bulma.css';
import profilePicture from '../images/profile-pic.png'

function About() {
    return (
        <div className='about'>
            <div className='about-me columns'>
                <div className='about-text column is-two-fifths has-text-centered'>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget accumsan mi. Duis at neque ut metus efficitur hendrerit nec eu leo. Curabitur consequat aliquam elementum. Proin suscipit dictum felis, nec pharetra massa euismod nec. Donec ut erat massa. Donec id tempus enim.</p>
                </div>
                <div className='column is-one-fifth'>

                </div>
                <div className='column is-two-fifths has-text-centered'>
                    <img src={profilePicture} className='profile-pic' alt='my-pic'></img>
                </div>
            </div>
        </div>
    )
}

export default About;