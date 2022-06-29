const express = require('express');
const TicketController = require('../controllers/tickets');

const router = express.Router();


router.get('/ticketSinResolver', TicketController.ticketSinResolver);

router.get('/clienteYEmpleado', TicketController.clienteYEmpleado);

router.get('/ticketsNoResueltos', TicketController.ticketsNoResueltos);

router.get('/atencionOficinas', TicketController.atencionOficinas);

router.get('/ticketsPorOficina', TicketController.ticketsPorOficina);

router.get('/buscarNombre', TicketController.buscarNombre);

router.get('/buscarDesperfecto', TicketController.buscarDesperfecto);

router.get('/buscarResueltosUnPaso', TicketController.buscarResueltosUnPaso);

router.get('/buscarBarrio', TicketController.buscarBarrio);

router.get('/findBarrioMasCercano', TicketController.findBarrioMasCercano);



module.exports = router;