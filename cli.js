#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pandemics = require('./');

meow({
	help: [
		'Examples',
		'  $ dandruff-pinkeye-halitosis',
		'  Hong Kong Halitosis'
	].join('\n')
});

console.log(pandemics());
