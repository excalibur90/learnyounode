const fs = require('fs');
const path = require('path');

const repertoire = process.argv[2];
const extention = '.' + process.argv[3]; 
fs.readdir(repertoire, function(err, files) {
  
  files.forEach(function(file) {
    if (path.extname(file) === extention) {
      console.log(file);
    }
  });
});