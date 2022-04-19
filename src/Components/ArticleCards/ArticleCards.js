import React from "react";
import './ArticleCards.scss';

const ArticleCards = (props) => {
    return (
            <article 
                className='news-card'>
                <h4>{props.title}</h4>
            </article>
    )
}

export default ArticleCards;