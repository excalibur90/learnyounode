const fs = require('fs');
const path = require('path');

module.exports = function filterDir(dirPath, ext, callback) {
  fs.readdir(dirPath, function(err, files) {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter(function(file) {
      return path.extname(file) === '.' + ext;
    });

    callback(null, filteredFiles);
  });
};
