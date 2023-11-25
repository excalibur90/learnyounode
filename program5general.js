const filterDir = require('./program5annexe');

const dirPath = process.argv[2];
const ext = process.argv[3];

filterDir(dirPath, ext, function(err, files) {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(function(file) {
    console.log(file);
  });
});
