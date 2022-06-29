const mongoose = require('mongoose');
const Cliente = require('./Cliente');
const Empleado = require('./Empleado');
const Schema  = mongoose.Schema;

const TicketSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  cliente: { type: typeof Cliente.schema },
  motivo: { type: String },
  localidad: { type: String },
  resuelto: { type: Boolean },
  empleado: { type: Boolean },
  fecha: { type: Date},
  derivaciones: {type: [ typeof {
    Empleado: typeof Empleado.schema,
    nombreOficinaAtencion: String,
    derivacionNumero: Number,
    areaDerivacion: String,
    solucion: String,
    funciono: Boolean,
  }]}
});

module.exports = Ticket = mongoose.model('Ticket', TicketSchema );
