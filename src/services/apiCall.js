const API_KEY = process.env.CAT_API_KEY;

export const fetchCats = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?small&has_breeds=1&limit=5&size=small', 
  {headers: {
    'x-api-key': API_KEY,
  }});
  if(response.status !== 200) {
    throw(new Error('Error fetching cats'))
  } else {
    return await response.json()
  }
}; 