import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-sky-200 px-12 py-2'>
            <nav className='md:flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>Learn with Educare</h2>
                <ul className='md:flex justify-center gap-4 text-blue-900 font-semibold'>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistics'>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;