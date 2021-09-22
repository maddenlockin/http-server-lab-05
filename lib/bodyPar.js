export const bodyParser = (req) => {
    if(req.method !== 'POST' || req.method !== 'PUT' || req.method !== 'PATCH'){
        return null;
    }
};


