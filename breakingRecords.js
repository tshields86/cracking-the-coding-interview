const Mocha = require('mocha')
const assert = require('assert')
const mocha = new Mocha()


const breakingRecords = scores => {
  let seasonMax = scores[0];
  let seasonMin = scores[0];
  let breakMax = 0;
  let breakMin = 0;

  scores.forEach(score => {
    if (score > seasonMax) {
      seasonMax = score;
      breakMax++;
    }
    if (score < seasonMin) {
      seasonMin = score;
      breakMin++;
    }
  });

  return [breakMax, breakMin];
};


mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('breakingRecords', function () {
  it('tally breaking highest and lowest scores from season', function () {
    assert.deepEqual(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]), [2, 4])
    assert.deepEqual(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]), [4, 0])
  })
})

mocha.run()