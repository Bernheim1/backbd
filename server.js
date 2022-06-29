const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Planes = require('./api/planes');
const cors = require('cors');
const Tickets = require('./api/tickets');
const Empleados = require('./api/empleados');
const Clientes = require('./api/clientes');
const Localidades = require('./api/localidades');

require('dotenv').config();

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.raw());
app.use('/planes', Planes);
app.use('/tickets', Tickets);
app.use('/empleados', Empleados);
app.use('/clientes', Clientes);
app.use('/localidades', Localidades);

mongoose.connect(
  `mongodb://${process.env.DB_HOST}/${process.env.DB}`,
  {useNewUrlParser: true},
  (err, res) =>{
    err && console.log('Error conectando a la db');
    app.listen(process.env.PORT || 4000, ()=>{
      console.log("Servidor corriendo en el http://localhost:8080");
    })
  }
)