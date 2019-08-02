
const urlDB = 'mongodb+srv://sotnikov_k:OP1imCvCqLmcrQri@mongovue-voe6y.mongodb.net/test?retryWrites=true&w=majority'

const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser')

// mongoose.connect(urlDB, {useNewUrlParser: true})
// .then(() => console.log('DB connected'))
// .catch(err => console.log(555, err, 555))

// const db = mongoose.connection;
// const requestsSchema = new Schema({
//   id:  { type: String, required: true },
//   status: Boolean,
//   name:   String,
//   email: String,
//   text: String
// });

// const Requests = mongoose.model('Parent', requestsSchema);

app.use(morgan('dev'))


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