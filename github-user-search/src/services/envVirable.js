const GITHUB_API_KEY = 'your-personal-access-token';


const headers = {
  Authorization: `Bearer ${GITHUB_API_KEY}`,
};

fetch('https://api.github.com/some-endpoint', { headers })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
