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
        } else {
            setErrorMessage('Please add your message');
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
        <div className='contact'>
            <h1 className='is-size-2 has-text-white has-text-centered'>Contact Me</h1>
            <form className='contact-form columns is-flex is-flex-direction-column mt-3' id='contact-form'>
                <div className='column is-two-thirds'>
                    <p className='form-p has-text-white is-size-3'>Name:</p>
                    <input className='form-input input custom-input has-background-black has-text-white'
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('name')}></input>
                </div>
                <div className='column is-two-thirds'>
                    <p className='form-p has-text-white is-size-3'>Email:</p>
                    <input className='form-input input custom-input has-background-black has-text-white'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('email')}></input>
                </div>
                <div>
                    <div className='column is-two-thirds'>
                        <p className='form-p  has-text-white is-size-3'>Message:</p>
                        <textarea className='form-input textarea custom-input has-background-black has-text-white'
                            type='text'
                            placeholder='Message'
                            name='message'
                            value={message}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('message')}></textarea>
                    </div>
                </div>
                <div className='column is-one-quarter'>
                    <button className='button has-background-black has-border-white has-text-white' onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text has-text-white">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;