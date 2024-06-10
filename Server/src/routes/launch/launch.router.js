const express = require('express');
const { getAll } = require('./launch.controller');

const launchRouter = express.Router();

launchRouter.get('/getall', getAll); // Correct path

module.exports = launchRouter;
