const net = require('net');

function ajoutzero(i) {
    return (i < 10 ? '0' : '') + i;
  }



const server = net.createServer(function (socket) {
  const date = new Date();
  const year = date.getFullYear();
  const month = ajoutzero(date.getMonth() + 1);
  const day = ajoutzero(date.getDate());
  const hours = ajoutzero(date.getHours());
  const minutes = ajoutzero(date.getMinutes());

  const data = `${year}-${month}-${day} ${hours}:${minutes}\n`;
  socket.end(data);
});

server.listen(process.argv[2]);


