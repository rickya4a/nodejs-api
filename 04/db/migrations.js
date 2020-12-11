const connection = require('./connection')
const migration = require('mysql-migrations');

require('dotenv').config()

migration.init(connection, __dirname + '/migrations', function() {
  console.log("finished running migrations");
});