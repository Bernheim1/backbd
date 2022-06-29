const express = require('express');
const PlanesController = require('../controllers/planes');

const router = express.Router();

router.get('/conOnceCanales', PlanesController.conOnceCanales);
router.get('/tieneCanales', PlanesController.tieneCanales);

module.exports = router;