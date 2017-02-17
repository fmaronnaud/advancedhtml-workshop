var express = require('express')
  , router = express.Router()

router.use('/', require('./HomeController'));

module.exports = router