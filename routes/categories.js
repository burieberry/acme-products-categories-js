const router = require('express').Router();
const db = require('../db');

router.get('/:name/products', function(req, res) {
  res.render('products', {
    categories: db.getCategoryNames(),
    category: req.params.name,
    products: db.getProductsByCategory(req.params.name)
  });
});

router.post('/', function(req, res) {
  db.createCategory(req.body);
  res.redirect('/categories/' + req.body.category + '/products');
});

router.post('/:name/products', function(req, res) {
  db.createProduct(req.body, req.params.name);
  res.redirect('/categories/' + req.params.name + '/products');
});

// router.delete('/:name', function(req, res) {

// });

module.exports = router;


// /routes/categories.js (~30 loc)
// - 5 route total
// - GET /categories/:name/products -- DONE
// - POST /categories -- DONE
// - DELETE /categories/:name
// - POST /categories/:name/products/ -- DONE
// - DELETE /categories/:name/products/:id
