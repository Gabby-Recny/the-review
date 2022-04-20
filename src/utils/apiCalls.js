export const getStories = (version) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${version}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => checkResponse(response))
}

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(`Error`)
    } else {
        return response.json()
    }
}