// src/routes/planets/planet.router.js

const express = require('express');
const { getAll } = require('./planet.controller');

const planetsRouter = express.Router();

planetsRouter.get('/getall', getAll);

module.exports = planetsRouter;
