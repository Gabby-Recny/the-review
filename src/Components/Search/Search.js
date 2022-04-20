import React, { useState } from "react";
import './Search.scss';

const Search = ({ searchArticles }) => {
    const [ searchInput, setSearchInput ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        searchArticles(searchInput)
        setSearchInput('')
    }


    return (
            <form className='search'>
                <input aria-label='search' className='search-bar' type='text' name='search' value={searchInput} onChange={event => setSearchInput(event.target.value)} placeholder="Search for articles"/>
                <button className= 'search-button' onClick={event => handleSubmit(event)}>
                    CLICK ME
                    {/* <img className="search-icon" src={searchIcon} alt="search icon"></img> */}
                </button>
            </form>
    )
}

export default Search;