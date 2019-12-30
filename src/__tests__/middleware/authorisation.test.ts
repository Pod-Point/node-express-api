import { NextFunction } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';
import { userFactory } from '../../database/factories';
import authorisation from '../../middleware/authorisation';
import Request from '../../types/Request';
import Response from '../../types/Response';

describe('middleware/authorisation', () => {
    const mockRequest: Request = {} as Request;
    const mockResponse: Response = {} as Response;
    const mockCallback: NextFunction = jest.fn();
    let header;

    beforeEach(() => {
        header = '';
        mockRequest.header = jest.fn(() => header);
        mockResponse.json = jest.fn();
        mockResponse.status = jest.fn(() => mockResponse);
    });

    it('returns a 401 response if no authorisation header exists', async () => {
        header = undefined;

        await authorisation(mockRequest, mockResponse, mockCallback);

        expect(mockResponse.status).toHaveBeenCalledWith(UNAUTHORIZED);
        expect(mockRequest.user).toBe(undefined);
    });

    it('returns a 401 response if no user is found to match the authorisation header exists', async () => {
        header = 'User someInvalidToken';

        await authorisation(mockRequest, mockResponse, mockCallback);

        expect(mockResponse.status).toHaveBeenCalledWith(UNAUTHORIZED);
        expect(mockRequest.user).toBe(undefined);
    });

    it('adds the user as a property of the request if the token is verified and a user is found', async () => {
        const user = await userFactory.create();

        header = `User ${user.uid}`;

        await authorisation(mockRequest, mockResponse, mockCallback);

        expect(mockRequest.user).toEqual(user);
    });
});
