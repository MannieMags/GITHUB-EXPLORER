const axios = require('axios');
require('dotenv').config();

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function getUserDetails(username) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${GITHUB_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
}

async function searchUsers(query) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: { q: query },
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${GITHUB_TOKEN}`
      }
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
}

module.exports = {
  getUserDetails,
  searchUsers,
};
