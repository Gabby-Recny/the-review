import React, { useEffect, useState } from 'react';
import { getStories } from '../../apiCalls';

const ArtsPage = () => {
    const [ results, setResults ] = useState([])
    const [ error, setError ] = useState('')
  
    useEffect(() => {
      getStories('arts')
      .then(data => setResults(data.results))
      .catch(error => setError(error))
    }, [])

    console.log(results)
    return (
        <h2>Arts</h2>
    )
}

export default ArtsPage;