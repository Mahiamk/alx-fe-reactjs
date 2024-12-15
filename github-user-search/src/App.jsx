import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState(""); // Input value for the search bar
  const [userData, setUserData] = useState(null); // State for storing GitHub user data
  const [error, setError] = useState(null); // State for error handling

  // Hardcode your GitHub API Key here (for testing purposes)
  const GITHUB_API_KEY = "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";  // Replace with your actual key

  const fetchGitHubUser = async () => {
    if (!username) {
      setError("Please enter a username.");
      return;
    }
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${GITHUB_API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`User not found (status: ${response.status})`);
      }

      const data = await response.json();
      setUserData(data); // Store user data
    } catch (err) {
      setUserData(null);
      setError(err.message); // Set error message
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>GitHub User Search</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchGitHubUser} style={styles.button}>
          Search
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      {userData && (
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
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    color: "#333",
  },
  searchContainer: {
    margin: "20px 0",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "300px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  profile: {
    marginTop: "20px",
    textAlign: "left",
    display: "inline-block",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  avatar: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
};

export default App;
