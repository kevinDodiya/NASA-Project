const express = require('express')
const {getall} =  require('./planet.controller');

const planetRouter =  express.Router();
planetRouter.get('/planets',getall);
module.exports =  planetRouter