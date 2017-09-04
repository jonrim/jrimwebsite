var Sequelize = require('sequelize');

var config = require('./config.json');
var db = new Sequelize(config.database, config.username, config.password, config);

module.exports = db;