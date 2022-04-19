import React, { useEffect, useState } from 'react';
// import { getStories } from '../../apiCalls';
// import ErrorPage from '../ErrorPage/ErrorPage';
import ArticleCards from '../ArticleCards/ArticleCards'
import './MainPage.scss';
import { Link } from 'react-router-dom';

const MainPage = ({ allArticles }) => {
  // const [ results, setResults ] = useState([]);
  // const [ error, setError ] = useState('');

  // useEffect(() => {
  //   getStories('home')
  //     .then(data => setResults(data.results))
  //     .catch(error => setError(error))
  // }, [])

  // if (error) return <ErrorPage />

  const mapArticles = allArticles.map(story => {
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