import axios from "axios";

// Function to fetch user data based on search parameters
export const fetchUserData = async (username, location, minRepos) => {
  let query = '';

  if (username) {
    query += `user:${username}`;
  }
  if (location) {
    query += ` location:${location}`;
  }
  if (minRepos > 0) {
    query += ` repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items; // Return the list of users matching the query
  } catch {
    throw new Error("Error fetching data");
  }
};
