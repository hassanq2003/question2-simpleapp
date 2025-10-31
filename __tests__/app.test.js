const request = require('supertest');
const app = require('../app');

describe('GET /health', () => {
    it('should return status 200 and JSON', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('ok');
    });
});

