import React from 'react';
import 'bulma/css/bulma.css';
import resume from '../../documents/Resume-Geria.pdf'

function Resume() {
    return (
        <div className='resume'>
            <h1 className='has-text-white is-size-2 has-text-centered'>Resume</h1>
            <div>
                <p className='has-text-white is-size-3 has-text-centered p-6'>Download my <a href={resume} download='Resume-Geria.pdf'>Resume 🔗</a></p>
                <div className='resume-boxes is-flex is-justify-content-space-around m-3'>
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