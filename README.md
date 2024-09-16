# GitHub Explorer

GitHub Explorer is a full-stack web application that allows users to search for GitHub profiles and explore repositories. It provides an intuitive interface to view user details, repositories, and commit histories.

## Features

- Search for GitHub users
- View detailed user profiles including bio, avatar, and public repositories
- Explore repository details such as creation date, last commit date, and recent commit history
- Responsive design for seamless use on desktop and mobile devices

## Tech Stack

- Frontend: React.js with React Bootstrap for UI components
- Backend: Express.js
- API: GitHub REST API
- Testing: Jest and React Testing Library

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

git clone https://github.com/your-username/github-explorer.git cd github-explorer


2. Install server dependencies:
cd server npm install


3. Install client dependencies:
cd ../client npm install


## Configuration

1. In the `server` directory, create a `.env` file and add your GitHub Personal Access Token:
GITHUB_TOKEN=your_personal_access_token


## Running the Application

1. Start the server:

2. In a new terminal, start the client:

3. Open your browser and navigate to `http://localhost:3000`

## Running Tests

To run the test suite:


## Contributing

Contributions to GitHub Explorer are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to GitHub for providing the API
- React Bootstrap for the UI components
- All contributors who have helped shape this project

## Contact

If you have any questions or feedback, please open an issue on this repository.

Happy exploring!
