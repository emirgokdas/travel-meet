var express = require('express');
var router = express.router();

/* get home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'arif emir gokdas' });
});

module.exports = router;
