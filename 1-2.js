const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const charCount = {};
  for (let el of str1) {
    charCount[el] = (charCount[el] || 0) + 1;
  }

  for (let el of str2) {
    charCount[el] = charCount[el] ? charCount[el] - 1 : -1;
    if (charCount[el] < 0) return false;
  }
  return true;
};

// console.log(isPermutation('abcdefghi', 'ihgfedcba') === true)
// console.log(isPermutation('1234567812345678', '8877665544332211') === true)
// console.log(isPermutation('abcdefghiz', 'ihgfedcbaa') === false)
// console.log(isPermutation('1122334455667788', '9911223344556677') === false)

const isPermutationSorted = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  return [...str1].sort().join('') === [...str2].sort().join('');
};

console.log(isPermutationSorted('abcdefghi', 'ihgfedcba') === true)
console.log(isPermutationSorted('1234567812345678', '8877665544332211') === true)
console.log(isPermutationSorted('abcdefghiz', 'ihgfedcbaa') === false)
console.log(isPermutationSorted('1122334455667788', '9911223344556677') === false)