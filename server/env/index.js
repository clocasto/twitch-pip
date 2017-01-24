module.exports = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return require('./modes/production');
    default:
      return require('./modes/development');
  }
})();

