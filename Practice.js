let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maximumSubArray(arr) {
  let currSum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }

    currSum = currSum + arr[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

console.log(maximumSubArray(arr));
