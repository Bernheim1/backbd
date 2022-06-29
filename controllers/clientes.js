const Cliente = require("../models/Cliente");

const mayorTicketsCreados = (req, res) => {
    Cliente.aggregate(
      [
        {
            $group :{
                _id: "$_id",
                nombre: {$push : "$nombre"},
                apellido: {$push : "$apellido"},
                count:{$sum:"$ticketsCreados"},
            }
        } 
    ],
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const clientesTodosLosPlanes = (req, res) => {
    Cliente.find(
      {
        "planes": {$all: ["Normal", "SuperPack1", "SuperPackFull"]}
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const clientesMasCuatroTickets = (req, res) => {
    Cliente.aggregate(
      [
        {$match:{
            "ticketsCreados": { $gt: 4}
        }},
        {$project: {
            "nombre": 1,
            "apellido": 1,
            "localizacion": 1
        }}
    ],
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const sinContratarPackFull = (req, res) => {
    Cliente.find(
      {
        "planes": {$ne:"SuperPackFull"}
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const soloPackFull = (req, res) => {
    Cliente.find(
      {
        "planes": {$nin: ["Normal", "SuperPack1"]}
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const masDeCuota = (req, res) => {
    Cliente.find(
      {
        "couta": {$gte: 4500}
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const menosDeCuota = (req, res) => {
    Cliente.find(
      {
        "couta": {$lte: 4500}
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const buscarClienteNombreApellido = (req, res) => {
    Cliente.find(
      {
        $and: [
            {"nombre": {$in: ["Pedro"]}},
            {"apellido":{$in: ["Perez"]}}
        ]
    },
      (err, user) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(user);
      }
    );
  };

  

module.exports = {
    mayorTicketsCreados,
    clientesTodosLosPlanes,
    clientesMasCuatroTickets,
    sinContratarPackFull,
    soloPackFull,
    masDeCuota,
    menosDeCuota,
    buscarClienteNombreApellido,

};
