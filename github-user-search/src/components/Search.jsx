import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(''); // Store the search input
  const [location, setLocation] = useState(''); // Store location input
  const [minRepos, setMinRepos] = useState(0); // Store minimum repositories input
  const [userData, setUserData] = useState([]); // Store an array of fetched user data
  const [loading, setLoading] = useState(false); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (!username && !location && minRepos <= 0) return; // Don't do anything if no filters

    setLoading(true); // Start loading
    setError(null); // Reset error state
    setUserData([]); // Clear previous results

    try {
      const data = await fetchUserData(username, location, minRepos); // Fetch user data
      setUserData(data); // Set user data (now an array)
    } catch {
      setError("Looks like we cant find the user"); // Error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={styles.container}>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username
          placeholder="Enter GitHub username"
          style={styles.input}
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)} // Update location
          placeholder="Enter location (optional)"
          style={styles.input}
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)} // Update minimum repos
          placeholder="Minimum repositories"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {/* Display multiple users if userData is an array */}
      {userData.length > 0 && !loading && !error && (
        <div>
          {userData.map((user) => (
            <div key={user.id} style={styles.profile}>
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                style={styles.avatar}
              />
              <h2>{user.name || user.login}</h2>
              <p>{user.bio || 'No bio available'}</p>
              <p>
                <strong>Public Repos:</strong> {user.public_repos}
              </p>
              <p>
                <strong>Location:</strong> {user.location || 'No location available'}
              </p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    marginRight: '10px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  profile: {
    marginTop: '20px',
    textAlign: 'left',
    display: 'inline-block',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  avatar: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
};

export default Search;
