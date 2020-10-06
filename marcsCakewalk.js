const Mocha = require('mocha')
const assert = require('assert')
const mocha = new Mocha()

const marcsCakewalk = calories => {
  calories.sort((a, b) => b - a);
  return calories.reduce((miles, cur, i) => {
    return miles += Math.pow(2, i) * cur;
  }, 0);
};


mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('marcsCakewalk', function () {
  it('should count min miles to burn calories', function () {
    assert.deepEqual(marcsCakewalk([1, 3, 2]), 11)
    assert.deepEqual(marcsCakewalk([7, 4, 9, 6]), 79)
  })
})

mocha.run()