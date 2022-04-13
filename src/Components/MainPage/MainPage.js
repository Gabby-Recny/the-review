import React, { useEffect, useState } from 'react';
import { getStories } from '../../apiCalls';
import Header from '../Header/Header';
import FeaturedStory from '../FeaturedStory/FeaturedStory';
import ErrorPage from '../ErrorPage/ErrorPage';
import NewsArticle from '../NewsArticle/NewsArticle';

const MainPage = () => {
  const [ results, setResults ] = useState([]);
  const [ error, setError ] = useState('');
  const [ topStory, setTopStory ] = useState({});

  useEffect(() => {
    getStories('home')
    .then(data => setResults(data.results))
    .catch(error => setError(error))
  }, [])

  console.log(results)

  if (error) return <ErrorPage />

  // const getFeaturedStory = (results) => {
  //   setTopStory(Math.floor(Math.random() * results.length))
  // }

  console.log(results)

  const mapArticles = results.map(story => {
    return <NewsArticle 
              key={story.title}
              title={story.title}
              authors={story.byline}
              url={story.url}
              abstract={story.abstract}
              // image={story.multimedia}
              type={story.section}
              date={story.created_date}
              updated_date={story.updated_date}
              published_date={story.published_date}
            />
  })

  return (
      <>
        <Header />
        {mapArticles}
      </>
  );
}

export default MainPage;