const express =  require('express');
const planentsrouter = require('./routes/planents/planet.router')
const app =  express();
app.use(express.json());
app.use(planentsrouter);
module.exports = app;