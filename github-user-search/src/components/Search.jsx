// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(''); // Store the search input
  const [userData, setUserData] = useState(null); // Store the fetched user data
  const [loading, setLoading] = useState(false); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (!username) return; // Don't do anything if the username is empty
    setLoading(true); // Start loading
    setError(null); // Reset error state
    setUserData(null); // Clear previous results

    try {
      const data = await fetchUserData(username); // Fetch the user data
      setUserData(data); // Set user data
    } catch {
      setError("Looks like we cant find the user"); // Set error message if something goes wrong
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
          onChange={(e) => setUsername(e.target.value)} // Update username on input change
          placeholder="Enter GitHub username"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {userData && !loading && !error && (
        <div style={styles.profile}>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            style={styles.avatar}
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || "No bio available"}</p>
          <p>
            <strong>Public Repos:</strong> {userData.public_repos}
          </p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
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
