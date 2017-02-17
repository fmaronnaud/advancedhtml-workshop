var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.use(require('./controllers'));


app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs'
}));

app.set('view engine', '.hbs');


app.listen(3000);