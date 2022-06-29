const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const LocalidadSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  nombre: { type: String },
  geometry: {
    type: typeof{
        type: String,
        coordinates: [Number]
    },
    require: false
    },
},
{collection:'localidades'});


module.exports = Localidad = mongoose.model('Localidad', LocalidadSchema );
