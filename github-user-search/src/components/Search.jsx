// Search.js
import React, { useState } from "react";
import { fetchUserData } from "./services/githubService";

const Search = () => {
  const [username, setUsername] = useState(""); // Stores the input value
  const [userData, setUserData] = useState(null); // Stores API response
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [error, setError] = useState(""); // Tracks error state

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    setError("");
    setUserData(null);
    try {
      const data = await fetchUserData(username); // Call the API
      setUserData(data); // Set user data
    } catch (err) {
      setError("Looks like we can't find the user"); // Handle error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Capture input
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="Avatar" width="100" />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;