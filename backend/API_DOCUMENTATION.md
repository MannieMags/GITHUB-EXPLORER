# API Documentation

## Search Users

Searches for GitHub users based on a query string.

- **URL:** `/api/github/search`
- **Method:** `GET`
- **URL Params:** 
  - `query=[string]` (required)
- **Success Response:**
  - **Code:** 200
  - **Content:** Array of user objects
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ error : "An error occurred while searching for users" }`

### Example

GET /api/github/search?query=john

Response: [ { "login": "john", "id": 1234567, "avatar_url": "https://avatars.githubusercontent.com/u/1234567?v=4", "html_url": "https://github.com/john" }, ... ]

