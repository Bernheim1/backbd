const express = require('express');
const ClienteController = require('../controllers/clientes');

const router = express.Router();

router.get('/mayorTicketsCreados', ClienteController.mayorTicketsCreados);

router.get('/clientesTodosLosPlanes', ClienteController.clientesTodosLosPlanes);

router.get('/clientesMasCuatroTickets', ClienteController.clientesMasCuatroTickets);

router.get('/sinContratarPackFull', ClienteController.sinContratarPackFull);

router.get('/soloPackFull', ClienteController.soloPackFull);

router.get('/masDeCuota', ClienteController.masDeCuota);

router.get('/menosDeCuota', ClienteController.menosDeCuota);

router.get('/buscarClienteNombreApellido', ClienteController.buscarClienteNombreApellido);











module.exports = router;