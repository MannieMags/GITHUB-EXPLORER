const axios = require('axios');
require('dotenv').config();

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers = {
  'Accept': 'application/vnd.github.v3+json',
  'Authorization': `token ${GITHUB_TOKEN}`
};

async function getUserDetails(username) {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      axios.get(`${GITHUB_API_URL}/users/${username}`, { headers }),
      axios.get(`${GITHUB_API_URL}/users/${username}/repos`, { headers })
    ]);

    const reposWithDetails = await Promise.all(reposResponse.data.slice(0, 5).map(async (repo) => {
      const commitsResponse = await axios.get(`${GITHUB_API_URL}/repos/${username}/${repo.name}/commits`, { headers });
      return {
        ...repo,
        last_commits: commitsResponse.data.slice(0, 5).map(commit => ({
          sha: commit.sha,
          message: commit.commit.message,
          date: commit.commit.author.date
        }))
      };
    }));

    return {
      ...userResponse.data,
      repos: reposWithDetails
    };
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
}

async function searchUsers(query) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: { q: query },
      headers
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
}

module.exports = {
  getUserDetails,
  searchUsers
};
