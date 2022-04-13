const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rCQGdOkp98BjDAL9RCx3zxJyGyCV5CRC";


export const getStories = (version) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${version}.json?api-key=${process.env.REACT_APP_API_KEY}`;
  
    return fetch(url, {
      method : 'GET',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000/'
    }
  })
}



// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rCQGdOkp98BjDAL9RCx3zxJyGyCV5CRC


// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey;