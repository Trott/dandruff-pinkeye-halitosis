'use strict';
const cities = require('./cities.json')
const diseases = require('./diseases.json');
const sample = require('lodash/collection/sample');

module.exports = function () {
	return sample(cities.entries) + ' ' + sample(diseases.entries);
};
