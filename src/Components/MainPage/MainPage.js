import React, { useEffect, useState } from 'react';
import { getStories } from '../../utils/apiCalls';
import ErrorPage from '../ErrorPage/ErrorPage';
import ArticleCards from '../ArticleCards/ArticleCards'
import './MainPage.scss';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const MainPage = () => {
  const [ results, setResults ] = useState([]);
  const [ error, setError ] = useState('');
  const [ isLoading, setLoader ] = useState(true)


  useEffect(() => {
    getStories('home')
      .then(data => {
        setResults(data.results)
        setLoader(false)
      })
      .catch(error => setError(error))
  }, [])

  if (error) return <ErrorPage />
  if (isLoading) return <Loader />


  const mapArticles = results.map(story => {
    return (
    <Link key={story.title} to={`/article/${story.title}`}>
      <ArticleCards 
                key={story.title}
                title={story.title}
                type={story.section}
              />
      </Link>
    )
  })

  return (
      <>
        <section className='article-container'>
          {mapArticles}
        </section>
      </>
  );
}

export default MainPage;