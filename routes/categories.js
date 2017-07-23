const router = require('express').Router();
const db = require('../db');

router.get('/', function(req, res) {
  res.render('index', { categories: db.getCategoryNames() });
});


module.exports = router;


// /routes/categories.js (~30 loc)
// - 5 route total
// - GET /categories/:name/products
// - POST /categories
// - DELETE /categories/:name
// - POST /categories/:name/products/
// - DELETE /categories/:name/products/:id
