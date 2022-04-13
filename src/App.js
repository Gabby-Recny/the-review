import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import ArtsPage from './Components/ArtsPage/ArtsPage';
import SciencePage from './Components/SciencePage/ScincePage';
import WorldPage from './Components/WorldPage/WorldPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';


const App = () => {

  return (
    <Routes>
      <Route exact path='/' element={<MainPage/>}/>
      <Route exact path='/arts' element={<ArtsPage />}/>
      <Route exact path='/science' element={<SciencePage />}/>
      <Route exact path='/world' element={<WorldPage />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  );
}

export default App;
