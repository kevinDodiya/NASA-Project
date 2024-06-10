const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'kevin-1652',
  rocket: 'Explorer IS1',
  launchDate: new Date('July 8, 2024'),
  destination: 'Kepler-1652',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};
launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
