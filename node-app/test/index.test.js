const request = require('supertest');
const server = require('../index');

describe('GET /', () => {
  it('responds with Hello from Node!', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Node!');
  });
});
