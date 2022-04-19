import React, {useState, useEffect} from 'react';
import './ArticleDetails.scss'
import { useParams } from 'react-router-dom';
import { getStories } from '../../utils/apiCalls';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../Loader/Loader';
import { cleanSelectedArticle } from '../../utils/cleanData';

const ArticleDetails = () => {
    const [ selectedArticle, setSelectedArticle ] = useState({})
    const [ isLoading, setLoader ] = useState(true)
    const [ errorMessage, setErrorMessage ] = useState('')

    const params = useParams()

    useEffect(() => {
        getStories('home')
        .then(data => {
            let currentArticle = data.results.find(article => {
                return article.title === params.articleName
            })
            let cleanArticle = cleanSelectedArticle(currentArticle)
            setLoader(false)
            setSelectedArticle(cleanArticle)
        })
        .catch(error => {
            setErrorMessage(error)
            setLoader(false)
        })
    }, [params])
    
    if (errorMessage) return <ErrorPage />
    if (isLoading) return <Loader />


    console.log(selectedArticle.images)
    
    return (
        <section className='article-details'>
            {selectedArticle.images && 
            <img 
                src={selectedArticle.images[0].url} 
                alt={`${selectedArticle.images[0]}about the article titled ${selectedArticle.title}`}
                className='article-details-image'
            />}
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.authors}</p>
            <p>{selectedArticle.createdDate}</p>
            <p>{selectedArticle.abstract}</p>
            <a href={selectedArticle.url} target="_blank">Go to NY Times article</a>
            <p>{selectedArticle.section}</p>
            <p>Published: {selectedArticle.publishedDate}</p>
        </section>
    )
}

export default ArticleDetails;