import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function Contact() {
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
        console.log(e.target.value)
    };

    const handleBlur = (inputType) => {
        if (inputType === 'name' && !name) {
            setErrorMessage('Please enter your name');
        } else if (inputType === 'email' && !validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Please enter your name');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        }

        if (!message) {
            setErrorMessage('Please add a message')
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1 className='is-size-2 has-text-white ml-6'>Contact Me</h1>
            <form className='columns is-flex is-flex-direction-column mt-3' id='contact-form'>
                <div className='column is-two-thirds'>
                    <p className='has-text-white is-size-3 ml-6'>Name:</p>
                    <input className='input custom-input has-background-black has-text-white ml-6'
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('name')}></input>
                </div>
                <div className='column is-two-thirds'>
                    <p className='has-text-white is-size-3 ml-6'>Email:</p>
                    <input className='input custom-input has-background-black has-text-white ml-6'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('email')}></input>
                </div>
                <div>
                    <div className='column is-two-thirds'>
                        <p className='has-text-white is-size-3 ml-6'>Message:</p>
                        <textarea className=' textarea custom-input has-background-black has-text-white ml-6'
                            type='text'
                            placeholder='Message'
                            name='message'
                            value={message}
                            onChange={handleInputChange}></textarea>
                    </div>
                </div>
                <div className='column is-one-quarter'>
                    <button className='button has-background-black has-border-white has-text-white ml-6' onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text has-text-white ml-6">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;