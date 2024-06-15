const { planets } = require('../../models/planets/planets.model');

function GetAllPlanets(req, res) {
    res.status(200).json(planets);
}

module.exports = { GetAllPlanets };
