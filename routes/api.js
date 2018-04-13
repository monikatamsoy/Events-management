var user = require('../models/users')
var report = require('../models/report')

var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/register', createUser, createToken)

router.post('/signin', checkUser, createToken)

router.post('/mom', createPost, function(req, res, next) {
  res.redirect("/dashboard")
})

function createPost(req, res, next) {
  req.body.username = req.cookies["username"]
  var newReport = new report(req.body)
  newReport.save(function(err, data) {
    if (err) {
      console.log(err)
    } else {
      next()
    }
  })
}

function auth(req, res, next) {
  var userid = req.cookie.id
  user.findOne({"_id": userid}, function(err, data) {
    if (err) {
      console.log(err)
    } else if (data) {
      res.redirect("/dashboard")
    } else {
      res.redirect("/")
    }
  })
}

function createUser(req, res ,next) {
  console.log(req.body)
  var userObj = new user(req.body)
  userObj.save(function(error, data) {
    if (error) {
      console.log(error)
    } else {
      console.log(data["_id"]);
      console.log(data["_id"].valueOf());
      req.body.id = data["_id"].valueOf()
      req.body.name = data["username"]
      next()
    }
  })
}

function checkUser(req, res, next) {
  user.findOne(req.body, function(err, data) {
    if (err) {
      console.log(err)
    } else if (data) {
      req.body.id = data["_id"]
      req.body.name = data["username"]
      next()
    } else {
      res.render('index', {error: "Check credentials"})
    }
  })
}

function createToken(req, res, next) {
  res.cookie('_sssid', req.body.id.toString())
  res.cookie('username', req.body.name)
  res.redirect("/dashboard")
}

module.exports = router;
