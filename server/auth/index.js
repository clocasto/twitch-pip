const passport = require('passport');
const router = require('express').Router(); // eslint-disable-line
const User = require('../db').model('User');

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((_user) => {
      if (!_user) return done(null, false);
      return _user;
    })
    .then(_user => done(null, _user))
    .catch(done);
});


router.use('/auth/local', require('./local'));
// router.use('/auth/twitch', require('./twitch'));

router.get('/auth/me', (req, res, next) => {
  if (!req.user) return next({ status: 401 });
  return res.send(req.user.sanitize());
});

router.get('/auth/logout', (req, res, next) => {
  if (!req.user) return next({ status: 401 });
  req.logOut();
  return res.redirect('/');
});

module.exports = router;

