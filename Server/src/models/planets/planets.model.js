const fs = require('fs');
const path = require('path');
const parse = require('csv-parser');

let habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

function loadPlanetsData() {
    const filePath = path.join(__dirname, '..', '..', '..', 'data', 'kepler_data.csv');

    return new Promise((resolve, reject) => {
        habitablePlanets = []; // Clear the array before loading new data

        fs.createReadStream(filePath)
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })
            .on('error', (err) => {
                console.error('Error reading the kepler_data.csv file:', err);
                reject(err);
            })
            .on('end', () => {
                console.log(`${habitablePlanets.length} habitable planets found!`);
                resolve(habitablePlanets);
            });
    });
}

module.exports = {
    loadPlanetsData,
    planets: habitablePlanets, // Export the array directly
};
