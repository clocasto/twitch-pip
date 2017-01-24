const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const router = express.Router();

// Security/Compression middleware
router.use(helmet());
router.use(compression());

// Logging/Parsing Middleware
router.use(require('./config_middleware'));

// Static file serving
router.use('/public', express.static(path.join(__dirname, '../../public')));

// User sessions middleware
router.use(require('./session_middleware'));

module.exports = router;

