import React, { useState } from 'react';

// GitHub User Profile Component
const GitHubUserProfile = ({ username }) => {
  const [userData, setUserData] = useState(null); // Store user data
  const [error, setError] = useState(null); // Handle errors
  const [loading, setLoading] = useState(false); // Track loading state

  const GITHUB_API_KEY = "your-personal-access-token";  // Replace with your actual key

  
  const fetchGitHubUser = async (username) => {
    setLoading(true);  // Start loading
    setError(null);    // Reset error state

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
      setUserData(data); // Set user data
    } catch (err) {
      setError(err.message); // Set error message if failed
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  // Fetch data if username is provided
  React.useEffect(() => {
    if (username) {
      fetchGitHubUser(username);
    }
  }, [username]);  // Re-run effect when username changes

  return (
    <div style={styles.profileContainer}>
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
          <p>
            <strong>Followers:</strong> {userData.followers}
          </p>
          <p>
            <strong>Following:</strong> {userData.following}
          </p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" style={styles.profileLink}>
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  profileContainer: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  profile: {
    display: 'inline-block',
    textAlign: 'left',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
  },
  avatar: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    marginBottom: '15px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  profileLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default GitHubUserProfile;
