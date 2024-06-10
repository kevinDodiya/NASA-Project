const { launches } = require('../../models/launches.model');

function getAll(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = { getAll };
