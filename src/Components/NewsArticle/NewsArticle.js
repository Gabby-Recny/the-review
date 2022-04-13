import react from "react";
import './NewsArticle.scss'

const NewsArticle = (props) => {
    return (
        <article className='news-card'>
            <h3>{props.title}</h3>
        </article>
    )
}

export default NewsArticle;