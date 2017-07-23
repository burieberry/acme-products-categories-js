const express = require('express');
const nunjucks = require('nunjucks');
const db = require('./db');

const app = express();
app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.get('/', function(req, res, next) {
  res.render('index', { categories: db.getCategoryNames() });
});

app.use('/categories', require('./routes/categories'));

const port = 3000 || process.env.PORT;
app.listen(port, function(req, res, next) {
  console.log(`Listening on port ${port}`);
});


// Server.js (~30 loc)
// - GET '/'
