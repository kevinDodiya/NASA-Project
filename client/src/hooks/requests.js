const apicontroller = 'http://localhost:8000';

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${apicontroller}/planets`);
  return await response.json();
}

// Example usage:
// httpGetPlanets().then(planets => console.log(planets)).catch(error => console.error('Error:', error));


async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};