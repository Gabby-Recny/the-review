import './App.css';
import { useEffect, useState } from 'react';
import { getStories } from './apiCalls';
import Header from '../src/Components/Header/Header';

const App = () => {
  const [ results, setResults ] = useState([])
  const [ error, setError ] = useState('')

  useEffect(() => {
    getStories('home')
    .then(data => setResults(data,results))
    .catch(error => setError(error))
  }, [])

  return (
    <main>
      <Header/>
    </main>
  );
}

export default App;
