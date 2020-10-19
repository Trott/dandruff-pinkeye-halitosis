'use strict'
const test = require('ava')
const pandemic = require('./')

test('returns a random name', function (t) {
  t.assert(pandemic().length > 0)
})

test('returns a two-part name', function (t) {
  t.assert(pandemic().indexOf(' ') > 0)
})

test('returns a different name each call', function (t) {
  // Make sure there's variety.
  const names = [pandemic(), pandemic(), pandemic(), pandemic(), pandemic()]
  const unique = names.filter((val, idx, arr) => arr.indexOf(val) === idx)
  t.assert(unique.length > 3)
})
