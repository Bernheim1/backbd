const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const ClienteSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  nombre: { type: String },
  apellido: { type: String },
  planes: { type: [String] },
  couta: { type: Number, require: false },
  ticketsCreados: {type: Number },
  localizacion: {
    type: typeof{
        type: String,
        coordinates: [Number]
    },
    require: false
}
});

module.exports = Cliente = mongoose.model('Cliente', ClienteSchema );
