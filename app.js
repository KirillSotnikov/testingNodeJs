const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'))

app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404;
  next(err)
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {message: err.message, error: err});
})

const server = app.listen(process.env.PORT || 3001, function() {
  console.log('Server is satated on port: ' + server.address().port)
})