const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const env = process.env.NODE_ENV;

const app = express();
const db = require('./db');
const port = process.env.PORT || 3000;

require('greenlock-express').create({
 
  // Let's Encrypt v2 is ACME draft 11
  version: 'draft-11'
 
  // Note: If at first you don't succeed, switch to staging to debug
  // https://acme-staging-v02.api.letsencrypt.org/directory
, server: 'https://acme-v02.api.letsencrypt.org/directory'
 
  // Where the certs will be saved, MUST have write access
, configDir: '~/.config/acme/'
 
  // You MUST change this to a valid email address
, email: 'jr@jonathanrim.com'
 
  // You MUST change these to valid domains
  // NOTE: all domains will validated and listed on the certificate
, approvedDomains: [ 'jonathanrim.com', 'jonathanrim.herokuapp.com' ]
 
  // You MUST NOT build clients that accept the ToS without asking the user
, agreeTos: true
 
, app: require('express')().use('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Hello, World!\n\n💚 🔒.js');
  })
 
  // Join the community to get notified of important updates
, communityMember: true
 
  // Contribute telemetry data to the project
, telemetry: true
 
//, debug: true
 
}).listen(80, 443);

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