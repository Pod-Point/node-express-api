import { OK } from 'http-status-codes';
import request from 'supertest';
import app from '../../app';
import config from '../../config';

describe('handlers/status', () => {
    it('returns json if the request is json', async () => {
        const response = await request(app)
            .get(config.routes.status);

        expect(response.status).toBe(OK);
        expect(response.body).toEqual({
            message: 'Hello world!',
        });
    });

    it('returns text if the request is anything other than json', async () => {
        const response = await request(app)
            .get(config.routes.status)
            .set('Accept', 'text/html');

        expect(response.status).toBe(OK);
        expect(response.text).toBe('Hello world!');
    });
});
