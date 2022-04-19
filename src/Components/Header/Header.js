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


// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey;