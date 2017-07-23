const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.get('/', function(req, res, next) {
  res.render('index');
});

app.use('/', require('./routes/categories'));

const port = 3000 || process.env.PORT;
app.listen(port, function(req, res, next) {
  console.log(`Listening on port ${port}`);
});
