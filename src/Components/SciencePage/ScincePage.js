import React, { useEffect, useState } from 'react';
import { getStories } from '../../apiCalls';


const SciencePage = () => {

    const [ results, setResults ] = useState([])
    const [ error, setError ] = useState('')
  
    useEffect(() => {
      getStories('science')
      .then(data => setResults(data.results))
      .catch(error => setError(error))
    }, [])

    return (
        <h2>Science</h2>
    )
}

export default SciencePage;