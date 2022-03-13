const fs = require('fs');
const path = require('path');

const response = (res, content, type = 'json') => {
    res.type(type);
    res.header('Access-Control-Allow-Origin', '*');
    res.write(content);
    res.end();
};

const mock = (res, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            response(res, err.message, 'html');
        } else {
            response(res, data);
        }
    });
};

const mockMiddleware = (config) => (req, res, next) => {
    const { projectDir, mockDir } = config;
    const filePath = path.join(projectDir, `./${mockDir + req.path}.json`);
    return fs.stat(filePath, (err) => {
        if (err) {
            next();
        } else {
            mock(res, filePath);
        }
    });
};

module.exports = mockMiddleware;
