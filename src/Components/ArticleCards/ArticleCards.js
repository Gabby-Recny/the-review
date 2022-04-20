import React from "react";
import './ArticleCards.scss';

const ArticleCards = (props) => {
    return (
            <article 
                className='news-card'>
                <div className='thumbnail-info'>
                    <h4>{props.title}</h4>
                    <p className='thumbnail-type'>{props.type}</p>
                    <p className='thumbnail-date'>{props.publishDate}</p>
                </div>
                <div className='thumbnail-image'>
                    <img src={props.images[2].url} alt={`Image of ${props.title}`}/>
                </div>
            </article>
    )
}

export default ArticleCards;