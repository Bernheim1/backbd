const Ticket = require("../models/Ticket");

  const ticketSinResolver = (req, res) => {
    Ticket.find(
      {
        resuelto : false
      },
      {
        cliente : 1
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);

        res.status(200).json(ticket);
      }
    );
  };

  const clienteYEmpleado = (req, res) => {
    Ticket.find(
      {
        empleado : true
      },
      {
        cliente : 1
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);

        res.status(200).json(ticket);
      }
    );
  };

  const ticketsNoResueltos = (req, res) => {
    Ticket.find(
      {
        "resuelto": {$exists: true}
      },
      (err, ticket) => {
        err && res.status(500).send(err.message);

        res.status(200).json(ticket);
      }
    );
  };

  const atencionOficinas = (req, res) => {
    Ticket.aggregate(
      [
        {$unwind:
            "$derivaciones"
        },
        {
          $sortByCount: "$derivaciones.nombreOficinaAtencion"
        },
        {
          $project:{
            oficina: "$derivaciones.nombreOficinaAtencion",
          }
        }
    ],
      (err, ticket) => {
        err && res.status(500).send(err.message);

        res.status(200).json(ticket);
      }
    );
  };

  const ticketsPorOficina = (req, res) => {
    Ticket.find(
      {
        $or: [
            {"localidad": "Merlo"},
            {"derivaciones.nombreOficinaAtencion": "Sucursal Merlo"}
        ]
    },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const buscarNombre = (req, res) => {
    Ticket.find(
      {
        $text:{
          $search: "Juan"
        }
    },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const buscarDesperfecto = (req, res) => {
    Ticket.find(
      {
        $text:{
          $search: "Desperfecto"
        }
    },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  const buscarResueltosUnPaso = (req, res) => {
    Ticket.find(
      {
        $and: [
          {
            "$derivaciones.derivacionNumero":{
              $size: 1
            }
          },
          {
            "resuelto": true
          }
        ]
    },
      (err, ticket) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(ticket);
      }
    );
  };

  
  const buscarBarrio = (req, res) => {
    Ticket.aggregate(
      [
        {
          $match:{
            "localidad" : "Barracas"
          }
        },
        {
          $lookup: {
            from: "localidades",
            localField: "nombre",
            foreignField: "localidad",
            as: "barrio"
          }
        }
    ],
      (err, ticket) => {
        err && res.status(500).send(err.message);

        res.status(200).json(ticket);
      }
    );
  };

  const findBarrioMasCercano = (req, res) => {
    Barrio.findOne(
      {
        geometry: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [-58.542429, -34.671762],
            },
            $maxDistance: 10000,
          },
        },
      },
      {
        geometry: 0,
      },
      (err, barrio) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(barrio);
      }
    );
  };

module.exports = {
  ticketSinResolver,
  clienteYEmpleado,
  ticketsNoResueltos,
  atencionOficinas,
  ticketsPorOficina,
  buscarNombre,
  buscarDesperfecto,
  buscarResueltosUnPaso,
  buscarBarrio,
  findBarrioMasCercano
};
