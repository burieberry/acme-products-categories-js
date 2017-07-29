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

router.delete('/:name', function(req, res) {
  db.deleteCategory(req.params.name);
  res.redirect('/');
});

router.delete('/:name/products/:id', function(req, res) {
  db.deleteProduct(req.params.id * 1, req.params.name);
  res.redirect('/categories/' + req.params.name + '/products');
});

module.exports = router;
