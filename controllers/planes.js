const Plan = require("../models/Plan");

const conOnceCanales = (req, res) => {
  Plan.find(
    {
      "canales": {$in: [1,2,3,4,5,6,7,8,9,10,11]}
    },
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};

const tieneCanales = (req, res) => {
  Plan.find(
    {
      "canales": {$elemMatch: {$gte: 7, $lte: 16}}
    },
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};



module.exports = {conOnceCanales, tieneCanales};
