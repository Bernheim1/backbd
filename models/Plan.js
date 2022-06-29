const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const PlanSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId },
  nombre: { type: String },
  precio: { type: Number },
  canales: { type: [Number] }
},
{collection:'planes'});

module.exports = Plan = mongoose.model('Plan', PlanSchema );
