const Sequelize = require('sequelize');

const env = require('../env');

const db = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  logging: env.LOGGING,
  native: true,
  dialect: env.DATABASE_DIALECT,
  port: env.DATABASE_PORT,
});

module.exports = db;
