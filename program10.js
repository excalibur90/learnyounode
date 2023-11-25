const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const file = process.argv[3];
  const stream = fs.createReadStream(file);
  stream.pipe(res);
});

server.listen(process.argv[2]);
