const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const upperCaseBody = body.toUpperCase();
      res.end(upperCaseBody);
    });
  } 
});

server.listen(port);
