import axios from "axios";

// GitHub API base URL
const BASE_URL = "https://api.github.com/users/";

/**
 * Fetch GitHub user data by username
 * @param {string} username - GitHub username
 * @returns {object} user data
 */
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data; // return the user object
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // let the caller handle errors
  }
}