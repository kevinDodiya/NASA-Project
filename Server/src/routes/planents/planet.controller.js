// const planents = require('../../models/planets.model')
const planets = require('../../models/planets.model')
function getall(req,res){
    return res.status(200).json(planets);
} 

module.exports= {getall}