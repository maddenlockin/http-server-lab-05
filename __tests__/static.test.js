import app from '../lib/app.js';
import request from 'supertest';
import readFile from 'fs/promises';
//import staticRoute from '../lib/static.js';

describe('get route for static-server', () => {
    it('should return index.html from  GET /', async () => {
        // promise.all says all promises must happen before anything else
        const [res, index] = await Promise.all([
            request(app).get('/'),
            readFile('../public/index.html', 'utf-8',)

        ]);
        expect(res.text).toEqual(index);
    });

    it('shoudl get the main.css file from GET /', async () => {
        const [res, index] = await Promise.all([
            request(app).get('../styles/main.css'),
            readFile('../public/styles/main.css', 'utf-8')
        ]);
        expect(res.text).toEqual(index);
    });
});

