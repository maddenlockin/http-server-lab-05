import simpleDB from './simpleDB.js';
import html from '../public/index.html';

// const object map 
// routes will be in their own files and imported 

const app = async (req, res) => {
    const [, resource] = req.url.split('/');
    if (resource === '/') {
        try {
            res.statusCode = 200;
            res.setheader('Content-Type', 'text/html');
            const html = simpleDB.get('../public/index.html');
            res.end(html);
        } catch (error) {
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/html');
        res.end(html('<h1>Not Found</h1>'));
    }
};

export default app;

