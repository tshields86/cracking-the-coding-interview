const countAnagramOccurrences = (s, b) => {
  let matchCount = 0;

  const sCounts = s.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const letters = Object.keys(sCounts);

  const bCounts = {};

  b.split('').forEach((el, i) => {
    if (i >= s.length) bCounts[b[i - s.length]] -= 1;

    bCounts[el] = (bCounts[el] || 0) + 1;

    let match = true;
    letters.forEach(l => {
      if (sCounts[l] !== bCounts[l]) match = false;
    });
    if (match) matchCount++;
  });

  console.log({sCounts, bCounts})

  return matchCount;
};


console.log(countAnagramOccurrences('abbc', 'cbabadcbbabbcbabaabccbabc') === 7);
console.log(countAnagramOccurrences('ABCD', 'BACDGABCDA') === 3);
console.log(countAnagramOccurrences('AABA', 'AAABABAA') === 3);