import React, { useEffect, useState } from 'react';
import { getStories } from '../../apiCalls';
import Header from '../Header/Header';
import FeaturedStory from '../FeaturedStory/FeaturedStory';
import ErrorPage from '../ErrorPage/ErrorPage';
import NewsArticle from '../NewsArticle/NewsArticle';
import './MainPage.scss';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [ results, setResults ] = useState([]);
  const [ error, setError ] = useState('');
  // const [ topStory, setTopStory ] = useState({});

  useEffect(() => {
    getStories('home')
    .then(data => setResults(data.results))
    .catch(error => setError(error))
  }, [])

  if (error) return <ErrorPage />

  const briefing = results.find(story => {
    return story.section === 'briefing'
  }) 

  // const getFeaturedStory = (results) => {
  //   setTopStory(Math.floor(Math.random() * results.length))
  // }


  const mapArticles = results.map(story => {
    return (
    <Link to={`/article/${story.title}`}>
      <NewsArticle 
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
        {/* <FeaturedStory topStory={briefing}/> */}
        <section className='article-container'>
          {mapArticles}
        </section>
        {/* {briefing} */}
      </>
  );
}

export default MainPage;