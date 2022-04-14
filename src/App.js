import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import SelectedArticle from './Components/SelectedArticle/SelectedArticle'


const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<MainPage/>}/>
      <Route path='*' element={<ErrorPage />}/>
      <Route path='/article/:title' element={<SelectedArticle/>}/>
    </Routes>
  );
}

export default App;
