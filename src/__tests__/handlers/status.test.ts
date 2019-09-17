import { OK } from 'http-status-codes';
import request from 'supertest';
import app from '../../app';
import config from '../../config';
import language from '../../i18n/language';
import translations from '../../i18n/translations';
import Language from '../../types/i18n/Language';

describe('handlers/status', () => {
    it('returns json if the request is json', async () => {
        const response = await request(app)
            .get(config.routes.status);

        expect(response.status).toBe(OK);
        expect(response.body).toEqual({
            message: language(translations.helloWorld, Language.EN_GB),
        });
    });

    it('returns text if the request is anything other than json', async () => {
        const response = await request(app)
            .get(config.routes.status)
            .set('Accept', 'text/html');

        expect(response.status).toBe(OK);
        expect(response.text).toBe(language(translations.helloWorld, Language.EN_GB));
    });
});
