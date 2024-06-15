const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// Load planets data before starting the server
loadPlanetsData()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to load planets data:', err);
    });
