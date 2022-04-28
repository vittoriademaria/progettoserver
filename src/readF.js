const fs= require('fs'); 
const path= require('path'); 

function leggi(){
    var risultato= fs.readFileSync('./src/saluti.txt', 'utf-8');
    return risultato.toString();
}

module.exports= leggi();