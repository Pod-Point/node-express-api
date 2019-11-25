import { NextFunction } from 'express';
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import errorMiddleware from '../../middleware/error';
import Request from '../../types/Request';
import Response from '../../types/Response';
import ErrorResponse from '../../types/responses/Error';

describe('middleware/error', () => {
    let mockError: Error = new Error();
    const mockRequest: Request = {} as Request;
    const mockResponse: Response = {} as Response;
    const mockCallback: NextFunction = jest.fn();

    beforeEach(() => {
        mockResponse.json = jest.fn();
        mockResponse.status = jest.fn(() => mockResponse);
    });

    it('returns a 500 response if called with any exception', () => {
        errorMiddleware(mockError, mockRequest, mockResponse, mockCallback);

        const expectedResponse: ErrorResponse = {
            error: 'Whoops! Something went wrong.',
        };

        expect(mockResponse.status).toHaveBeenCalledWith(INTERNAL_SERVER_ERROR);
        expect(mockResponse.json).toHaveBeenCalledWith(expectedResponse);
    });

    it('returns a 404 response if the exception is an EntityNotFoundError from typeorm', () => {
        mockError = new EntityNotFoundError('SomeEntityName', { some: 'criteria' });

        errorMiddleware(mockError, mockRequest, mockResponse, mockCallback);

        const expectedResponse: ErrorResponse = {
            error: 'No query results for entity [SomeEntityName].',
        };

        expect(mockResponse.status).toHaveBeenCalledWith(NOT_FOUND);
        expect(mockResponse.json).toHaveBeenCalledWith(expectedResponse);
    });
});
