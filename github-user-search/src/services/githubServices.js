// services/githubService.js
import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return user data
  } catch (error) {
    throw new Error("User not found"); // Throw error for invalid user
  }
};