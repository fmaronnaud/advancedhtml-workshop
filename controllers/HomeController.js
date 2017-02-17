var express = require('express')
  , router = express.Router()

/*
router.get('/', function(req, res) {
  res.send('Hello world!')
})
*/

router.get('/', function(req, res) {
  res.render('pages/home',{
    	pagetitle: "Homepage"
    });
})

module.exports = router