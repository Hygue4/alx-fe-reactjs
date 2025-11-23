import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// Create axios instance with base URL
const githubAPI = axios.create({
  baseURL: GITHUB_API_URL,
});

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
