import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStories } from "../../apiCalls";

import './SelectedArticle.scss';

const SelectedArticle = (props) => {
    const params = useParams();
    const [ selectedArticle, setSelectedArticle ] = useState();
    const [ allArticles, setAllArticles ] = useState();

    useEffect(() => {
        getStories('home')
            .then(data => {
                setAllArticles(data.results)
                const currentStory = allArticles.find(article => {
                    return params.title = article.title
                })
                setSelectedArticle(currentStory)
            })
    }, [])

    console.log('All of the news', allArticles)
    console.log('Params', params.title)
    console.log('Selected', selectedArticle)
    return (
            <article 
                className='news-card'>
                <h3>{props.title}</h3>
            </article>
    )
}

export default SelectedArticle;