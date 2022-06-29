const express = require('express');
const LocalidadesController = require('../controllers/localidades');

const router = express.Router();

router.get('/buscarLocalidad', LocalidadesController.buscarLocalidad);

router.get('/buscarLocalidadCerca', LocalidadesController.buscarLocalidadCerca);

router.get('/buscarLocalidadPoligono', LocalidadesController.buscarLocalidadPoligono);

module.exports = router;