var express = require('express');
var router = express.Router();
var user = require('../models/users')
var post = require('../models/report')

/* GET home page. */
router.get('/', authUser, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/dashboard", auth, getPosts, function(req, res, next) {
  console.log(req.body.data)
  res.render('dashboard', {data: req.body.data , role: req.body.role})
})

router.get("/logout", function(req, res, next) {
  res.clearCookie("_sssid")
  res.redirect("/")
})

function getPosts(req, res, next) {
  user.findOne({"_id": req.cookies["_sssid"]}, function(err, data) {
    if (err) {
      console.log(err)
    } else if (data) {
      if (data.role == "Secretary") {
        req.body.role = 1
      } else {
        req.body.role = 0
      }
      fetchPosts(req, res, next)
    } else {
      res.redirect("/")
    }
  })
}

function fetchPosts(req, res, next) {
  if (req.body.role) {
    post.find({username: req.cookies["username"]}, function(err,data) {
      if (err) {
        console.log(err)
      } else {
        req.body.data = data
        next()
      }
    })
  } else {
    post.find({}, function(err,data) {
      if (err) {
        console.log(err)
      } else {
        req.body.data = data
        next()
      }
    })
  }
}

function auth(req, res, next) {
  var userid = req.cookies["_sssid"]
  user.findOne({"_id": userid}, function(err, data) {
    if (err) {
      console.log(err)
    } else if (data) {
      next()
    } else {
      res.redirect("/")
    }
  })
}

function authUser(req, res, next) {
  var userid = req.cookies["_sssid"]
  user.findOne({"_id": userid}, function(err, data) {
    if (err) {
      console.log(err)
    } else if (data) {
      res.redirect("/dashboard")
    } else {
      next()
    }
  })
}


module.exports = router;
