const countPairs = (a, b) => {
  const aCount = a.reduce((acc, cur) => ({ ...acc, [cur]: true }), {});
  return b.reduce((acc, cur) => (aCount[cur] ? [...acc, cur] : acc), []).length;
};

console.log(countPairs(
  [13, 27, 35, 40, 49, 55, 59],
  [17, 35, 39, 40, 55, 58, 60]
) === 3);