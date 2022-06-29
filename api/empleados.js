const express = require('express');
const EmpleadoController = require('../controllers/empleados');

const router = express.Router();

router.get('/mayorTicketsAtendidos', EmpleadoController.mayorTicketsAtendidos);

router.get('/empleadosMasCuatroTickets', EmpleadoController.empleadosMasCuatroTickets);

router.get('/sectorVentas', EmpleadoController.sectorVentas);

router.get('/empleadoMasCercano', EmpleadoController.empleadoMasCercano);









module.exports = router;