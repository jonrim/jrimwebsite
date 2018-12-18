const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const env = process.env.NODE_ENV;

const app = express();
const db = require('./db');
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes'));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);

  res
  .status(err.status || 500)
  .json({
    errorStatus: err.status || 500,
    message: err.message || 'Internal Server Error'
  });
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});