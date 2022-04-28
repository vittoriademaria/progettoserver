var express = require('express');
var router = express.Router();
var http = require('http');

router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/subscribe", function(req, res, next) {
  const { name, email } = req.body;

  
  res.render("subscribed", {
    title: "You are subscribed",
    name,
    email
  });
});



module.exports = router;

