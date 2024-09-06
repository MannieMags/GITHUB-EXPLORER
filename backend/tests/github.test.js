const request = require('supertest');
const app = require('../src/app');
const githubService = require('../src/services/githubService');

jest.mock('../src/services/githubService');

describe('GitHub API', () => {
  it('should search users', async () => {
    const mockUsers = [{ id: 1, login: 'testuser' }];
    githubService.searchUsers.mockResolvedValue(mockUsers);

    const res = await request(app)
      .get('/api/github/search')
      .query({ query: 'test' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockUsers);
  });

  it('should handle errors', async () => {
    githubService.searchUsers.mockRejectedValue(new Error('API Error'));

    const res = await request(app)
      .get('/api/github/search')
      .query({ query: 'test' });

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('error');
  });
});
