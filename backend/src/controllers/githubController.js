const githubService = require('../services/githubService');

async function getUserDetails(req, res) {
  try {
    const { username } = req.params;
    const userDetails = await githubService.getUserDetails(username);
    res.json(userDetails);
  } catch (error) {
    console.error('Error in getUserDetails controller:', error);
    res.status(500).json({ error: 'An error occurred while fetching user details' });
  }
}

async function searchUsers(req, res) {
  try {
    const { query } = req.query;
    const users = await githubService.searchUsers(query);
    res.json(users);
  } catch (error) {
    console.error('Error in searchUsers controller:', error);
    res.status(500).json({ error: 'An error occurred while searching for users' });
  }
}

module.exports = {
  getUserDetails,
  searchUsers
};
