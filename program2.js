const fs = require('fs');
let contenu = fs.readFileSync(process.argv[2]);


let  nombre = contenu.toString().split('\n').length - 1;


console.log(nombre);