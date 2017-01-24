const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const env = require('../env');

const client = redis.createClient(env.STORE_PORT, env.STORE_HOST);
const router = require('express').Router(); // eslint-disable-line

router.use(session({
  secret: env.SESSION_SECRET,
  store: new RedisStore({ ttl: 1800, client }),
  saveUninitialized: true,
  resave: false,
}));

router.use((req, res, next) => {
  console.dir(req.session, { depth: 4, colors: true });
  return next();
});

module.exports = router;

