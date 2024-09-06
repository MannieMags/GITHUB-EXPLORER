const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/github';

export const getUserDetails = async (username) => {
  try {
    const response = await fetch(`${API_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
