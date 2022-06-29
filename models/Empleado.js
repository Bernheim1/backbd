const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const EmpleadoSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  nombre: { type: String },
  apellido: { type: String },
  area: { type: String },
  ticketsAtendidos: {type: Number },
  localizacion: {
    type: typeof{
        type: String,
        coordinates: [Number]
    },
    require: false
}
});

module.exports = Empleado = mongoose.model('Empleado', EmpleadoSchema );
