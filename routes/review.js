var express = require("express");
var router = express.Router();
var assert = require("assert");
var fs = require("fs");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

router.get("/", function(req, res, next) {
  var path = "./stuff/reviews/";
  var hotel;
  fs.readdir(path, function(err, items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i] == req.query.hotel) {
        fs.readFile(items[i], "utf-8", function(err, data) {
          hotel = JSON.parse(req.query.data);
          res.json(hotel);
        });
      }
    }
  });
});

module.exports = router;
