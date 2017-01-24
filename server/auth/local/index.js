const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../../db');
const strategyFn = require('./local.strategy')(db);
const authCbDef = require('./local.callback');
const router = require('express').Router(); // eslint-disable-line

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, strategyFn));

router.post('/login', (req, res, next) => {
  if (req.user) return next({ status: 400 });

  const authCb = authCbDef(req, res, next, db);
  return passport.authenticate('local', authCb)(req, res, next);
});

module.exports = router;

