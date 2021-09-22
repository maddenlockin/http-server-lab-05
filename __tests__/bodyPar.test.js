import { bodyParser } from '../lib/bodyPar.js';

describe('testing the bodyparser', () => {
    it('should return null if method is not PPP', () => {
        const req = {
            method: 'GET',
        };
        const theParser = bodyParser(req);
        expect(theParser).tobeNull;
    });
});

