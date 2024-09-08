const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const githubRoutes = require('./routes/githubRoutes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/github', githubRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
