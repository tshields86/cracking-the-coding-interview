function isSubstring(str, substr) {
  return str.includes(substr);
}

const rotateString = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  return isSubstring(str2 + str2, str1);
};

console.log(rotateString('waterbottle', 'erbottlewat'))
console.log(rotateString('abc', 'dabc'))