export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  console.log('request: ', url)
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}