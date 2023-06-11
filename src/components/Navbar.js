import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div>
            <div className='navbars'>
                <h1 className='nav-title'>Alyssa Geria</h1>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <button
                            id='nav-button'
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About'}
                        >About Me</button></li>
                    <li className='nav-item'>
                        <button
                            id='nav-button'
                            onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects'}>
                            Projects</button></li>
                    <li className='nav-item'>
                        <button
                            id='nav-button'
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact'}>
                            Contact</button></li>
                    <li className='nav-item'>
                        <button
                            id='nav-button'
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume'}>
                            Resume</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;