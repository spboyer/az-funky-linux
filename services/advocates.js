const Advocate = require('../models/advocate');

module.exports = {
  getAdvocates: getAdvocates
}

const people = [
  new Advocate(1, 'Shayne Boyer', '@spboyer')
]



function getAdvocates() {
  return {
    count: people.length,
    results: people
  };
}