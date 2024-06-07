// Frontend code

const apiController = 'http://localhost:8000';

// Load planets and return as JSON.
async function httpGetPlanets() {
  try {
    const response = await fetch(`${apiController}/planets`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching planets:', error);
    return [];
  }}
// Frontend code

// const apiController = 'http://localhost:8000';

// // Load planets and return as JSON.
// async function httpGetPlanets() {
//   try {
//     const response = await fetch(`${apiController}/planets`);
//     return await response.json();
//   } catch (error) {
//     // console.error('Error fetching planets:', error);
//     return [];
//   }
// }

// // Example usage
// httpGetPlanets().then(planets => {
//   console.log(planets);
// });


// Example usage:
httpGetPlanets().then(planets => console.log(planets)).catch(error => console.error('Error:', error));


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