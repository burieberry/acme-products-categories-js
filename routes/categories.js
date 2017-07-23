const router = require('express').Router();
const db = require('../db');

router.get('/', function(req, res) {
  res.render('products', {
    categories: db.getCategoryNames()
  });
});

router.get('/:name/products', function(req, res) {
  res.render('products', {
    categories: db.getCategoryNames(),
    category: req.params.name,
    products: db.getProductsByCategory(req.params.name)
  });
});

module.exports = router;


// /routes/categories.js (~30 loc)
// - 5 route total
// - GET /categories/:name/products -- DONE
// - POST /categories
// - DELETE /categories/:name
// - POST /categories/:name/products/
// - DELETE /categories/:name/products/:id
