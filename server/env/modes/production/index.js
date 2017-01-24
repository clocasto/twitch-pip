module.exports = {
  DATABASE_NAME: process.env.DBNAME,
  DATABASE_USERNAME: process.env.PGUSER,
  DATABASE_PASSWORD: process.env.PGPASSWORD,
  DATABASE_PORT: process.env.PGPORT,
  DATABASE_DIALECT: process.env.DBDIALECT,
  SESSION_SECRET: process.env.SESSION_SECRET,
  LOGGING: false,
  STORE_PORT: process.env.STORE_PORT,
  STORE_HOST: process.env.STORE_HOST,
  HTTP_SERVER_PORT: 8080,
  HTTPS_SERVER_PORT: 443,
  SSL_CERT: process.env.SSL_CERT,
  SSL_KEY: process.env.SSL_KEY,
  SSL_PASSPHRASE: process.env.SSL_KEY,
  TWITCH: {
    clientID: process.env.TWITCH_CKEY,
    clientSecret: process.env.TWITCH_SECRET,
    callbackURL: process.env.TWITCH_CB,
  },
};

