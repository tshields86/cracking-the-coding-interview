// function hasUniqueCharactersSet(str) {
//   const charMap = {};
//   for (let i = 0; i < str.length; i++) {
//     if (charMap[str[i]]) return false;
//     charMap[str[i]] = true;
//   }
//   return true;
// }

function hasUniqueCharactersSet(str) {
  let chars = new Set();

  for (let el of str) {
    if (chars.has(el)) return false;
    chars.add(el);
  }

  return true;
}

// console.log(hasUniqueCharactersSet('abcdefghi') === true);
// console.log(hasUniqueCharactersSet('jklpoiuqwerzxcvmnsadf') === true);
// console.log(hasUniqueCharactersSet('abcadef') === false);
// console.log(hasUniqueCharactersSet('!@#$%^&*()(*#($&#(*$&#*($&#()))))') === false);

function hasUniqueCharactersSort(str) {
  const sortedArr = [...str].sort();
  const hasDupes = sortedArr.some((el, i, a) => el === a[i+1]);

  return hasDupes ? false : true;
}

console.log(hasUniqueCharactersSort('abcdefghi') === true);
console.log(hasUniqueCharactersSort('jklpoiuqwerzxcvmnsadf') === true);
console.log(hasUniqueCharactersSort('abcadef') === false);
console.log(hasUniqueCharactersSort('!@#$%^&*()(*#($&#(*$&#*($&#()))))') === false);