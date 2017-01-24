const path = require('path');
const express = require('express');

const router = express.Router();

const publicRoute = path.join(__dirname, '../public');

const sendIndex = res => res.sendFile(path.join(publicRoute, 'index.html'));
const send404 = res => res.sendFile(path.join(publicRoute, '404.html'));

// Middleware and static serving config
router.use(require('./config'));

// Authentication
router.use(require('./auth'));

// API
router.use('/api', require('./api'));

router.get('*', (req, res) => sendIndex(res));

router.get('*', (req, res, next) => next({ status: 404 }));

router.use((info, req, res, next) => { // eslint-disable-line
  if (info.status && info.status === 404) {
    return send404(res);
  } else if (info.status && !info.message) {
    return res.sendStatus(info.status);
  } else if (info.status && info.message) {
    return res.status(info.status).send(info);
  } else {
    console.error('ERROR:', info);
    return res.sendStatus(500);
  }
});

module.exports = router;

