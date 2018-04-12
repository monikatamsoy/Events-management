var user = require('../models/users')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find({}, function(error, data) {
    if (error){
      console.log(error);

    }
    else {
      res.json(data)
    }
  })

});

module.exports = router;
