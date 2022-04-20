import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';
import { getStories } from './utils/apiCalls';
import React, {useState, useEffect} from 'react';


const App = () => {
  // const [ results, setResults ] = useState([]);
  // const [ error, setError ] = useState('');
  // const [ isLoading, setLoader ] = useState(true);
  // const [ searchResults, setSearchResults ] = useState([])
  // const [ isSearching, setSearch ] = useState(false)


  // useEffect(() => {
  //   getStories('home')
  //     .then(data => {
  //       setResults(data.results)
  //       setLoader(false)
  //     })
  //     .catch(error => setError(error))
  // }, [])

  // if (error) return <ErrorPage />
  // if (isLoading) return <Loader />
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<MainPage/>}/>
        <Route path='/article/:articleName' element={<ArticleDetails/>}/>
        <Route path='/search' element={<MainPage/>}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
}

export default App;
