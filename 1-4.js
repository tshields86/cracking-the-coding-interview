const isPalindromePermutationsSet = str => {
  console.log({ str })
  const chars = {};

  for (let char of str) {
    if (char === ' ') continue;
    const lCase = char.toLowerCase();
    chars[lCase] = chars[lCase] ? chars[lCase] - 1 : 1;
  }

  const oddCount = Object.values(chars)
    .reduce((acc, cur) => acc + cur, 0);

  return oddCount > 1 ? false : true;
};

console.log(isPalindromePermutationsSet('Tact Coa') === true)
console.log(isPalindromePermutationsSet('   ') === true)
console.log(isPalindromePermutationsSet('ab a b') === true)
console.log(isPalindromePermutationsSet('sasadfgsadfghjk;hjk;sadfghjk;dfghjk;') === true)
console.log(isPalindromePermutationsSet('abcadef') === false)
console.log(isPalindromePermutationsSet('1234567890') === false)
console.log(isPalindromePermutationsSet('a b') === false)
