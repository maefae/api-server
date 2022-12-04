'use strict';

const { sequelizeDatabase } = require('./src/models/index.js');
const { start } = require('./src/server.js');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Connection to database is successful!');
    start();
  })
  .catch(e => console.error('Cannot connect to database', e));