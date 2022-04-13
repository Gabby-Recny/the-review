export const getStories = (version) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${version}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
}



// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rCQGdOkp98BjDAL9RCx3zxJyGyCV5CRC


// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey;