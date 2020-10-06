const rotateMatrix = matrix => {
  // const result = [];
  // for (let row of matrix) {
  //   row.forEach((el, i) => {
  //     if (result[i]) result[i].unshift(el)
  //     else result[i] = [el]
  //   });
  // }
  // return result;

  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix.map(e => e[i]).reverse();
    result.push(row);
  }
  return result;
};

// Input:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// Output:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ];
// [
//   [ 1,  2,  3,  4],
//   [ 5,  6,  7,  8],
//   [ 9, 10, 11, 12],
//   [13, 14, 15, 16]
// ],
// [
//   [13,  9,  5,  1],
//   [14, 10,  6,  2],
//   [15, 11,  7,  3],
//   [16, 12,  8,  4]
// ],

console.log(rotateMatrix(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
))

console.log(rotateMatrix(
  [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12],
    [13, 14, 15, 16]
  ]
))