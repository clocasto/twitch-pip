const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = {
  DATABASE_NAME: 'twitchception',
  DATABASE_USERNAME: 'postgres',
  DATABASE_PASSWORD: 'password',
  DATABASE_PORT: '5432',
  DATABASE_DIALECT: 'postgres',
  SESSION_SECRET: ['one', 'two', 'three'],
  LOGGING: query => console.log(chalk.grey('>>>'), query, '\n'),
  STORE_PORT: '6380',
  STORE_HOST: '127.0.0.1',
  HTTPS_SERVER_PORT: '3001',
  HTTP_SERVER_PORT: '3000',
  SSL_KEY: fs.readFileSync(path.join(__dirname, './ssl/key.pem'), 'utf8'),
  SSL_CERT: fs.readFileSync(path.join(__dirname, './ssl/cert.pem'), 'utf8'),
  SSL_PASSPHRASE: 'test',
  TWITCH: {
    clientID: '',
    clientSecret: '',
    callbackURL: 'https://localhost:3001/auth/twitch/callback',
  },
};

