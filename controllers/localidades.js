const Localidad = require("../models/Localidad");

const buscarLocalidad = (req, res) => {
    Localidad.findOne(
      {
        geometry:
        {
            $geoIntersects:
            {
                $geometry: {
                    "type": "Point",
                    "coordinates": [
                        -58.36117744445801,
                        -34.63419661490388
                    ]
                }
            }
        }
      },
      (err, localidad) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(localidad);
      }
    );
  };

  const buscarLocalidadCerca = (req, res) => {
    Localidad.findOne(
      {
        geometry:
        {
            $near:
            {
                $geometry: {
                    "type": "Point",
                    "coordinates": [
                        -58.4592753814056,
                        -34.5966774864904
                    ]
                },
                $maxDistance: 20000
            }
        }
      },
      (err, localidad) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(localidad);
      }
    );
  };

  const buscarLocalidadPoligono = (req, res) => {
    Localidad.findOne(
      {
        geometry:
        {
            $geoWithin:
            {
                $geometry: {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [-58.46443176269531, -34.63518530664355],
                            [-58.35662841796875, -34.63518530664355],
                            [-58.35662841796875, -34.561142101161515],
                            [-58.46443176269531, -34.561142101161515],
                            [-58.46443176269531, -34.63518530664355],
                        ],
                      ],
                }
            }
        }
      },
      (err, localidad) => {
        err && res.status(500).send(err.message);
  
        res.status(200).json(localidad);
      }
    );
  };

  
  



module.exports = {
    buscarLocalidad,
    buscarLocalidadCerca,
    buscarLocalidadPoligono
};
