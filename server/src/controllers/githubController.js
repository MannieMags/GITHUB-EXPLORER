const axios = require('axios');

// GitHub API base URL
const GITHUB_API = 'https://api.github.com';

// Search for GitHub users
exports.searchUsers = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`${GITHUB_API}/search/users?q=${username}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while searching for users' });
  }
};

// Get user details and repositories
exports.getUserDetails = async (req, res) => {
  try {
    const { username } = req.params;
    const userResponse = await axios.get(`${GITHUB_API}/users/${username}`);
    const reposResponse = await axios.get(`${GITHUB_API}/users/${username}/repos`);
    res.json({
      user: userResponse.data,
      repos: reposResponse.data,
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching user details' });
  }
};

// Get repository details and recent commits
exports.getRepoDetails = async (req, res) => {
  try {
    const { owner, repo } = req.params;
    const repoResponse = await axios.get(`${GITHUB_API}/repos/${owner}/${repo}`);
    const commitsResponse = await axios.get(`${GITHUB_API}/repos/${owner}/${repo}/commits?per_page=5`);
    res.json({
      repo: repoResponse.data,
      commits: commitsResponse.data,
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching repository details' });
  }
};
