import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import './NewsArticle.scss';

const NewsArticle = (props) => {
    const { title } = useParams()

    return (
            <article 
                className='news-card'>
                <h3>{props.title}</h3>
            </article>
    )
}

export default NewsArticle;