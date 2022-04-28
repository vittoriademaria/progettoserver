var express = require('express');
var router = express.Router();
const lettura= require('../src/readF')

router.get("/", function(req, res, next){
    res.render("risorsa", {title:"Risorsa", saluti:`${lettura}`})
});


module.exports = router;
