import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div>
            <div className='navbars'>
                <h1 className='nav-title'>Alyssa Geria</h1>
                <ul className='nav-items'>
                    <li className='nav-item'><a href='#about'>About Me</a></li>
                    <li className='nav-item'>Projects</li>
                    <li className='nav-item'>Contact</li>
                    <li className='nav-item'>Resume</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;