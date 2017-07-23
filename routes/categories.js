const router = require('express').Router();
const db = require('../db');

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
