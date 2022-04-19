import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getStories } from '../../apiCalls';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../Loader/Loader';

const ArticleDetails = () => {
    const [ selectedArticle, setSelectedArticle ] = useState({})
    const [ isLoading, setLoader ] = useState(true)
    const [ errorMessage, setErrorMessage ] = useState('')

    const params = useParams()

    useEffect( () => {
        getStories('home')
        .then(data => {
            let currentArticle = data.results.find(article => {
                return article.title = params.articleName
            })
            setLoader(false)
            setSelectedArticle(currentArticle)
        })
        .catch(error => {
            setErrorMessage(error)
            setLoader(false)
        })
    }, [])

    if (errorMessage) return <ErrorPage />
    if (isLoading) return <Loader />

    console.log(selectedArticle)
    return (
        <section>
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.byline}</p>
            <p>{selectedArticle.abstract}</p>
            <p>{selectedArticle.url}</p>
            <p>{selectedArticle.section}</p>
            <p>{selectedArticle.created_date}</p>
            <p>{selectedArticle.updated_date}</p> 
            <p>{selectedArticle.published_date}</p>
        </section>
    )
}

export default ArticleDetails;