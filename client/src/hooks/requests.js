const API = "http://localhost:8000"; // Corrected API endpoint

async function httpGetPlanets() {
  try {
    const response = await fetch(`${API}/planets/getall`); // Corrected endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch planets data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching planets:', error);
    throw error; // Propagate the error back to the caller
  }
}



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