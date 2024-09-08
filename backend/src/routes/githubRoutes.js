const express = require('express');
const router = express.Router();
const githubController = require('../controllers/githubController');

router.get('/users/:username', githubController.getUserDetails);
router.get('/search', githubController.searchUsers);

module.exports = router;
