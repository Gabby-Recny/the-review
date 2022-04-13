import './App.css';
import { useEffect } from 'react';
import { getStories } from './apiCalls';

const App = () => {

  // useEffect(() => {
  //   getStories('home')
  //   .then(response => console.log('RESPONSE:', response))
  // }, [])
  // .then((response) => {
  //   if (!response.ok) {
  //       throw new Error(response.error)
  //   }
  //   return response.json();
  // })
  // .catch(error => console.log('ERROR', error))
  return (
   <h1>App</h1>
  );
}

export default App;
