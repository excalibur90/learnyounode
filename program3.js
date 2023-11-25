const fs = require('fs');
let nbrline = 0;
let contenu = process.argv[2];

function compte(){
    fs.readFile(contenu,function compte1(err, data){
         nbrline = data.toString().split('\n').length -1;
         console.log(nbrline);


    })
   
}
compte()
   
    
    
    



