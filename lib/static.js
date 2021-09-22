import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';


const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export const staticRoute = async (req) => {
    if(req.method !== 'GET') return null;
    
    try {
        if(req.url === '/') {
            const urlGo = path.join(dirName, '/public', 'index.html');
            const fileReadFinish = await readFile(urlGo, 'utf-8');
            return fileReadFinish;
        } else if (req.url === '/styles/main.css') {
            const urlGo = path.join(dirName, '/public', '/styles/main.css');
            const fileReadFinish = await readFile(urlGo, 'utf-8');
            return fileReadFinish;
        }
    } catch (err) {
        return null;
    }
};
