const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./db');

const app = express();
app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(bodyParser.urlencoded({ exdended: false }));
app.use(methodOverride('_method'));

app.use('/', function(req, res, next) {
  console.log(req.method, req.url);
  res.on('finish', function() {
    console.log(req.method, req.url, res.statusCode);
  });
  next();
});

app.get('/', function(req, res, next) {
  res.render('index', { categories: db.getCategoryNames() });
});

app.use('/categories', require('./routes/categories'));

app.use(function(err, req, res, next) {
  res.render('error', { error: err });
});

app.use(function(req, res, next) {
  res.render('error');
});

const port = process.env.PORT || 3000;
app.listen(port, function(req, res, next) {
  console.log(`Listening on port ${port}`);
});

// TODO:
// - "update product" functionality

