import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import Header from './Components/Header/Header';
import { getStories } from './apiCalls';
import React, {useEffect, useState} from 'react';


const App = () => {
  const [ allArticles, setAllArticles ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    getStories('home')
      .then(data => setAllArticles(data.results))
      .catch(error => setError(error))
  }, [])

  if (error) return <ErrorPage />

  const searchArticles = allArticles.filter(article => {

  })



  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<MainPage allArticles={allArticles}/>}/>
        <Route path='/article/:articleName' element={<ArticleDetails/>}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
}

export default App;
