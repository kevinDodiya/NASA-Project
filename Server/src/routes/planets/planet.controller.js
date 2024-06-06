// src/planets/planets.controller.js


const planets = require('../../models/planets.model');

function getAll(req, res) {
    return res.status(200).json(planets);
}

module.exports = { getAll };
