const express = require('express');
const { GetAllPlanets } = require('./planets.controller');
const planetsRouter = express.Router();

planetsRouter.get('/getall', GetAllPlanets);

module.exports = planetsRouter;
