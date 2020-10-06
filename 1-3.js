// const encodeSpaces = url => {
//   return url.replace(/ /g, '%20');
// };

// console.log(encodeSpaces('nospaces'))
// console.log(encodeSpaces('   '))
// console.log(encodeSpaces(' l o t s   o f   s p a c e '))
// console.log(encodeSpaces('http://www.google.com/search?q=something really really funny'))

const urlify = (str, length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    const char = str[i];
    if (char === ' ') result.push('%20');
    else result.push(char);
  }
  return result.join('');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');