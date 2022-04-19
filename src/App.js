import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import Header from './Components/Header/Header';
import React from 'react';


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<MainPage/>}/>
        <Route path='/article/:articleName' element={<ArticleDetails/>}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
}

export default App;
