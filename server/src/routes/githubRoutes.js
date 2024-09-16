const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

// Define routes
router.get('/search/:username', githubController.searchUsers);
router.get('/user/:username', githubController.getUserDetails);
router.get('/repo/:owner/:repo', githubController.getRepoDetails);

module.exports = router;
