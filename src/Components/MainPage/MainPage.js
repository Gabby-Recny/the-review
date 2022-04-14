import React, { useEffect, useState } from 'react';
import { getStories } from '../../apiCalls';
import Header from '../Header/Header';
import ErrorPage from '../ErrorPage/ErrorPage';
import SelectedArticle from '../SelectedArticle/SelectedArticle'
import './MainPage.scss';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [ results, setResults ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    getStories('home')
    .then(data => setResults(data.results))
    .catch(error => setError(error))
  }, [])

  if (error) return <ErrorPage />


  const mapArticles = results.map(story => {
    return (
    <Link to={`/article/${story.title}`}>
      <SelectedArticle 
                key={story.title}
                title={story.title}
                authors={story.byline}
                url={story.url}
                abstract={story.abstract}
                image={story.multimedia[0].url}
                type={story.section}
                date={story.created_date}
                updated_date={story.updated_date}
                published_date={story.published_date}
              />
      </Link>
    )
  })

  return (
      <>
        <Header />
        <section className='article-container'>
          {mapArticles}
        </section>
      </>
  );
}

export default MainPage;