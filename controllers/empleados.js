const Empleado = require("../models/Empleado");

const mayorTicketsAtendidos = (req, res) => {
    Empleado.aggregate(
      [
        {
            $group :{
                _id: "$ticketsAtendidos", 
                nombre: {$push : "$nombre"},
                apellido: {$push : "$apellido"},
                count:{$sum:1},
            }
        } 
    ],
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const empleadosMasCuatroTickets = (req, res) => {
    Empleado.aggregate(
      [
        {$match:{
            "ticketsAtendidos": { $lt: 4}
        }},
        {$project: {
            "nombre": 1,
            "apellido": 1,
            "area": 1
        }}
    ],
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const sectorVentas = (req, res) => {
    Empleado.find(
      {
        "area": {$eq: "Ventas"}
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  //NO FUNCIONA
  const empleadoMasCercano = (req, res) => {
    Empleado.findOne(
      {
        geometry: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [-58.542429, -34.671762],
            },
            $maxDistance: 200000,
          },
        },
      },
      {
        geometry: 0,
      },
      (err, empleado) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(empleado);
      }
    );
  };



module.exports = {
    mayorTicketsAtendidos,
    empleadosMasCuatroTickets,
    sectorVentas,
    empleadoMasCercano
};
