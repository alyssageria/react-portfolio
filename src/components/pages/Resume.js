import React from 'react';
import 'bulma/css/bulma.css';

function Resume() {
    return (
        <div>
            <h1 className='has-text-white is-size-2 has-text-centered'>Resume</h1>
            <div>
                <p className='has-text-white is-size-3 has-text-centered'>View my <a href='https://docs.google.com/document/d/1V6B5vWDCXeDtD6i6N2EvKgv9SIy9R46OaYk_SDO1ZlA/edit?usp=sharing'>resume</a></p>
                <div className='is-flex is-justify-content-space-around m-3'>
                    <div className='box-1 is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                        <p className='has-text-white has-text-centered is-size-4'>Web Technologies:</p>
                        <ul className='has-text-white has-text-centered'>
                            <li className='mt-4'>Javascript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>jQuery</li>
                            <li>OOP</li>
                            <li>Bulma</li>
                            <li>Bootstrap</li>
                            <li>handlebars</li>
                        </ul>
                    </div>
                    <div className='box-2 is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                        <p className='has-text-white has-text-centered is-size-4'>Databases:</p>
                        <ul className='has-text-white has-text-centered'>
                            <li className='mt-4'>MySQL</li>
                            <li>MongoDB</li>
                            <li>noSQL</li>
                        </ul>
                    </div>
                    <div className='box-2 is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                        <p className='has-text-white has-text-centered is-size-4'>Education:</p>
                        <ul className='has-text-white has-text-centered'>
                            <li>Georgia Institute of Technology <br></br>
                                Certificate, Full Stack Software Development <br></br>
                                July 2023 - Atlanta, GA
                            </li>
                            <li className='mt-4'>Saddleback Community College <br></br>
                                Associates in Psychology <br></br>
                                June 2022 - Mission Viejo, CA
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;