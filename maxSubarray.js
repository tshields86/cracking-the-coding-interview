const maxSubarray = arr => {
  // We iterate through the arr once, using a greedy approach to keep track of the maximum
  // sum we've seen so far and the current sum.
  //
  // The currentSum variable gets reset to 0 every time it drops below 0.
  //
  // The maxSum variable is set to -Infinity so that if all numbers are negative, the highest
  // negative number will constitute the maximum subarray.

  let maxSum = -Infinity;
  let currentSum = 0;

  // We need to keep track of the starting and ending indices that contributed to our maxSum
  // so that we can return the actual subarray. From the beginning let's assume that whole array
  // is contributing to maxSum.
  let maxStartIndex = 0;
  let maxEndIndex = arr.length - 1;
  let currentStartIndex = 0;

  arr.forEach((currentNumber, currentIndex) => {
    currentSum += currentNumber;

    // Update maxSum and the corresponding indices if we have found a new max.
    if (maxSum < currentSum) {
      maxSum = currentSum;
      maxStartIndex = currentStartIndex;
      maxEndIndex = currentIndex;
    }

    // Reset currentSum and currentStartIndex if currentSum drops below 0.
    if (currentSum < 0) {
      currentSum = 0;
      currentStartIndex = currentIndex + 1;
    }
    console.log({ maxSum, currentSum, maxStartIndex, maxEndIndex, currentStartIndex })

  });

  return arr.slice(maxStartIndex, maxEndIndex + 1);
};

console.log(maxSubarray([1, -3, 2, -5, 7, 6, -1, 4, 11, -23]))
