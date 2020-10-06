const zeroMatrix = matrix => {
  const rows = new Array(matrix.length).fill(false);
  const cols = new Array(matrix[0].length).fill(false);

  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < cols.length; x++) {
      if (matrix[y][x] === 0) {
        rows[y] = true;
        cols[x] = true;
      }
    }
  }

  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < cols.length; x++) {
      if (rows[y] || cols[x]) {
        matrix[y][x] = 0;
      }
    }
  }

  return matrix;
};

// matrix: [
//   [1, 0, 3],
//   [4, 5, 6],
//   [7, 0, 9]
// ],
// expected: [
//   [0, 0, 0],
//   [4, 0, 6],
//   [0, 0, 0]
// ]

console.log(zeroMatrix(
  [
    [1, 0, 3],
    [4, 5, 6],
    [7, 0, 9]
  ]
))

console.log(zeroMatrix(
  [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9,  0, 11, 12],
    [13, 14, 15,  0],
    [17, 18, 19, 20]
  ]
))