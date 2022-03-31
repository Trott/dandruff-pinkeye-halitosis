'use strict'
const pandemic = require('./')
const assert = require('assert')

// returns a name
assert(pandemic().length > 0)

// returns a two-part name
assert(pandemic().indexOf(' ') > 0)

// returns different names
{
  const names = [pandemic(), pandemic(), pandemic(), pandemic(), pandemic()]
  const unique = names.filter((val, idx, arr) => arr.indexOf(val) === idx)
  assert(unique.length > 3)
}
