const compressString = str => {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i-1]) {
      arr.push({
        char: str[i],
        count: 1
      })
    } else {
      arr[arr.length-1].count++
    }
  }
  return arr
    .map(({ char, count }) => `${char}${count}`)
    .join('');
};

console.log(compressString('aabcccccaaa') === 'a2b1c5a3')