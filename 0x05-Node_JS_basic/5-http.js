const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require('fs');

function fileExists(filepath) {
    return fs.existsSync(filepath);
}

const app = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end("Hello Holberton School!");
    } else if (req.url === '/students') {
        const databasePath = process.argv[2];
        
        if (!fileExists(databasePath)) {
            res.writeHead(500);
            res.end("Cannot load the database");
        } else {
            res.write("This is the list of our students\n");
            try {
                await countStudents(databasePath);
                res.end();
            } catch (error) {
                res.writeHead(500);
                res.end("Cannot load the database");
            }
        }
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

app.listen(1245, () => {
    console.log("Server is listening on port 1245");
});

module.exports = app;
