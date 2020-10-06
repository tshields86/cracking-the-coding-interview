const findCubedPairs = n => {
  const pairs = {};
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      let sum = Math.pow(a, 3) + Math.pow(b, 3);
      if (pairs[sum]) pairs[sum].push([a, b]);
      else pairs[sum] = [[a, b]];
    }
  }
  console.log(pairs)
};

console.log(findCubedPairs(1000))