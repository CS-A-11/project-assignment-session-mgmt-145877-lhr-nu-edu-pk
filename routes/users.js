var express = require("express");
var router = express.Router();
var assert = require("assert");
var fs = require("fs");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

router.get("/", function(req, res, next) {
  var path = "./stuff/users/";
  var allUsers = [];
  var a = [];
  fs.readdir(path, function(err, items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i] == req.query.uname + ".json") {
        allUsers = [...allUsers, path + items[i]];
      }
    }
  });
  setTimeout(function() {
    for (var i = 0; i < allUsers.length; i++) {
      fs.readFile(allUsers[i], "utf-8", function(err, data) {
        if (err) {
          console.log(err);
        }
        a = [...a, JSON.parse(data)];
        if (a.length == allUsers.length) {
          res.json(a);
        }
      });
    }
  }, 500);
});

module.exports = router;
