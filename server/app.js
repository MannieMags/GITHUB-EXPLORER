// Import required modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const githubRoutes = require('./src/routes/githubRoutes');

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Add security headers
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/github', githubRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
