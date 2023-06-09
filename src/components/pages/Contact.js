import React from 'react';
import 'bulma/css/bulma.css';

function Contact() {
    return (
        <div>
            <h1 className='is-size-2 has-text-white has-text-centered'>Contact Me</h1>
            <form className='columns is-flex is-flex-direction-column'>
                <div className='column is-half'>
                    <p className='has-text-white is-size-3 ml-6'>Name:</p>
                    <input className='input custom-input has-background-black has-text-white ml-6' type='text' placeholder='Name'></input>
                </div>
                <div className='column is-half'>
                    <p className='has-text-white is-size-3 ml-6'>Email:</p>
                    <input className='input custom-input has-background-black has-text-white ml-6' type='text' placeholder='Email'></input>
                </div>
                <div>
                    <div className='column is-half'>
                        <p className='has-text-white is-size-3 ml-6'>Message:</p>
                        <textarea className=' textarea custom-input has-background-black has-text-white ml-6' type='text' placeholder='Message'></textarea>
                    </div>
                </div>
            </form>
            <button className='button has-background-black has-border-white has-text-white ml-6'>Submit</button>
        </div>
    )
}

export default Contact;