import { useEffect, useState } from 'react';
import { getStories } from '../../apiCalls';
import Header from '../Header/Header';

const MainPage = () => {
  const [ results, setResults ] = useState([])
  const [ error, setError ] = useState('')

  useEffect(() => {
    getStories('home')
    .then(data => setResults(data,results))
    .catch(error => setError(error))
  }, [])

  return (
      <>
        <Header />
        <main>
        <h2>MAIN PAGE</h2>
        </main>
      </>
  );
}

export default MainPage;