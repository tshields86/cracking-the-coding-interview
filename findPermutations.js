const countLetters = (s) => {
  return [...s].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
};

const checkLetters = (letters, string) => {
  const lettersClone = { ...letters };

  for (let l of string) {
    if (lettersClone[l]) lettersClone[l]--;
    else return false;
  }

  return true;
};

const findPermutations = (s, b) => {
  const locations = [];
  const sCounts = countLetters(s);

  for (let i = 0; i < b.length - (s.length - 1); i++) {
    let subString = b.substring(i, i + s.length);
    if (checkLetters(sCounts, subString)) locations.push(i);
  }
  
  return locations;
};


console.log(findPermutations('abbc', 'cbabadcbbabbcbabaabccbabc'));
console.log(findPermutations('ABCD', 'BACDGABCDA'));
console.log(findPermutations('AABA', 'AAABABAA'));



const sortString = s => [...s].sort().join('');

const findPermutationsSorted = (s, b) => {
  const locations = [];
  const sortedS = sortString(s);

  for (let i = 0; i < b.length - (s.length - 1); i++) {
    let slice = b.slice(i, i+ s.length);
    let sortedSlice = sortString(slice);
    if (sortedS === sortedSlice) locations.push(i);
  }

  return locations;
};


console.log(findPermutationsSorted('abbc', 'cbabadcbbabbcbabaabccbabc'));
console.log(findPermutationsSorted('ABCD', 'BACDGABCDA'));
console.log(findPermutationsSorted('AABA', 'AAABABAA'));