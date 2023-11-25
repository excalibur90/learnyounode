const http = require('http');

let urls = process.argv.slice(2);
const  contents = [];

urls.forEach((url, index) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    let content = '';
    response.on('data', (chunk) => {
      content += chunk;
    });
    response.on('end', () => {
      contents[index] = content;
      if (contents.length === urls.length) {
        contents.forEach((content) => {
          console.log(content);
        });
      }
    });
  });
});
