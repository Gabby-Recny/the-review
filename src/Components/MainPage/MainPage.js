import React, { useEffect, useState } from 'react';
import { getStories } from '../../utils/apiCalls';
import ErrorPage from '../ErrorPage/ErrorPage';
import ArticleCards from '../ArticleCards/ArticleCards'
import './MainPage.scss';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import FeaturedArticle from '../FeaturedArticle/FeaturedArticle';

const MainPage = () => {
  const [ results, setResults ] = useState([]);
  const [ error, setError ] = useState('');
  const [ isLoading, setLoader ] = useState(true);
  const [ searchResults, setSearchResults ] = useState([])
  const [ isSearching, setSearch ] = useState(false)


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

  const searchArticles = (searchInput) => {
    let filteredArticles = results.filter(result => {
      return result.title.toLowerCase().includes(searchInput) || result.section.toLowerCase().includes(searchInput)
    })
    setSearch(true)
    setSearchResults(filteredArticles)
}


  const mapArticles = (stories) => stories.map((story, index) => {
    return (
      <Link key={index} to={`/article/${story.title}`}>
        <ArticleCards 
                  key={index}
                  title={story.title}
                  type={story.section}
                  />
        </Link>
    )
  })

  return (
      <>
        <Search searchArticles={searchArticles}/>
        {/* <FeaturedArticle feature={results[0]}/> */}
        <section className='article-container'>
          {isSearching && mapArticles(searchResults)}
          {!isSearching && mapArticles(results)}
        </section>
      </>
  );
}

export default MainPage;