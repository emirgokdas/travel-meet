var express = require('express');
var router = express.router();

/* get home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hadila' });
});

module.exports = router;
