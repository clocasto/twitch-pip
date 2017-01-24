const express = require('express');
const chalk = require('chalk');
const https = require('https');
const db = require('./server/db');
const env = require('./server/env');

const httpsApp = express();
const httpApp = express();
const routes = require('./server');

httpsApp.use(routes);

httpApp.get('*', (req, res) => res.redirect(`https://localhost:${env.HTTPS_SERVER_PORT}${req.url}`));

db.sync({ force: true })
  .then(() => https.createServer({
      key: env.SSL_KEY,
      cert: env.SSL_CERT,
      passphrase: env.SSL_PASSPHRASE,
    }, httpsApp)
    .listen(env.HTTPS_SERVER_PORT, () => console.log(`The ${chalk.blue('https')} server is now listening on port ${chalk.red(env.HTTPS_SERVER_PORT)}!`)))
  .then(() => httpApp.listen(env.HTTP_SERVER_PORT, () => console.log(`The ${chalk.blue('http')} server is now listening on port ${chalk.blue(env.HTTP_SERVER_PORT)}!`)))
  .catch(console.error);

