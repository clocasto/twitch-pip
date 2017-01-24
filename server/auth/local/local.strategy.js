module.exports = function strategyModule(db) {
  return function localStrategy(email, password, done) {
    db.model('User')
      .findOne({
        where: { email },
      })
      .then((_user) => {
        if (!_user || !_user.correctPassword(password)) {
          return done(null, false);
        } else {
          return done(null, _user);
        }
      })
      .catch(done);
  };
};

