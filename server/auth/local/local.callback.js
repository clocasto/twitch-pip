module.exports = (req, res, next) => {
  return function authCb(err, user) { // eslint-disable-line
    if (err) return next(err);
    if (!user) {
      return next({ status: 401, message: 'Invalid login credentials.' });
    }
    req.logIn(user, (err) => { // eslint-disable-line
      if (err) return next(err);
      return res.send(user.sanitize());
    });
  };
};

