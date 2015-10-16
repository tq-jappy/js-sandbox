var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', { title: 'Express Sample' });
});

app.listen(process.env.PORT || 3000);