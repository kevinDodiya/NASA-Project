// src/routes/planets/planet.router.js

const express = require('express');
const { getAll } = require('./planet.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', getAll);

module.exports = planetsRouter;
