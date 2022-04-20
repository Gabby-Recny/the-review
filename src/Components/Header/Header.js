import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

const Header = () => {
    return (
        <header>
            <h1>The Review</h1>
            <nav>
                <NavLink to="/" element={<MainPage />}>
                    Home
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;
