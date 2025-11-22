import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// Create axios instance with base URL
const githubAPI = axios.create({
  baseURL: GITHUB_API_URL,
});

// Function to search for GitHub users
export const searchUsers = async (username) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

// Function to get user details
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
