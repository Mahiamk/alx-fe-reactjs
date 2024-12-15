const GITHUB_API_KEY = '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';


const headers = {
  Authorization: `Bearer ${GITHUB_API_KEY}`,
};

fetch('https://api.github.com/some-endpoint', { headers })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
