var express = require('express');
var router = express.Router();
const downloadPagina= require('../src/pageDownload'); 
const pageLoader= require('../src/pageLoader');
const os= require('os');
const fs = require("fs"); 
const path = require("path"); 
const process = require("process"); 


router.get("/", function(req, res, next) {
    res.render("wiki", { title: "Pagina Caricata" });
  });

  console.log(process.argv);

  const loader= new pageLoader("NodeJs"); 
  const sitoUrl= loader.getUrl(); 

  downloadPagina(sitoUrl.href).then(page => {
      fs.writeFileSync(path.join(".", "views", "wiki.hbs"), page);
}); 

  process.on("beforeExit", code=> {
      console.log("Ciao ciao");
  });



module.exports = router;
