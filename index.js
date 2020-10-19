'use strict'
const cities = require('./cities.json')
const diseases = require('./diseases.json')
const sample = require('lodash.sample')

module.exports = function () {
  return sample(cities.entries) + ' ' + sample(diseases.entries)
}
