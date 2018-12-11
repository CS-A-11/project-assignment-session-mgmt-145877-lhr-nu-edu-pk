var express = require("express");
var router = express.Router();
//var mongo = require('mongodb').MongoClient;
var assert = require("assert");
//var hotelMan = mongo('mongodb://localhost:27017/web', ['hotels']);
var fs = require("fs");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

router.get("/", function(req, res, next) {
  var path = "./stuff/hotels/";
  var allHotels = [];
  var a = [];
  var count;
  console.log(req.query.path);
  fs.readdir(path, function(err, items) {
    req.query.count > 0 ? (count = req.query.count) : (count = items.length);
    for (var i = 0; i < items.length && i < count; i++) {
      allHotels = [...allHotels, path + items[i]];
    }
  });
  setTimeout(function() {
    for (var i = 0; i < allHotels.length; i++) {
      fs.readFile(allHotels[i], "utf-8", function(err, data) {
        a = [...a, JSON.parse(data)];
        if (a.length == allHotels.length) {
          res.json(a);
        }
      });
    }
  }, 500);
});

module.exports = router;
