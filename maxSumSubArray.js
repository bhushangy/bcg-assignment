let maxSum = -Infinity;

function maxSumSubArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSum = Math.max(sum, maxSum);
    }
  }
}

const arr = [-1, 3, 4, -10, 31, 10, 10, -10, 9, -11, 5, 2, 8, -8, 0];
maxSumSubArray(arr);
console.log(maxSum);
