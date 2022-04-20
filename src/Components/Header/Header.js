import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

const Header = () => {
    return (
        <header>
            <NavLink to="/" element={<MainPage />}>
               <h1>The Review</h1>
            </NavLink>
        </header>
    )
}

export default Header;
