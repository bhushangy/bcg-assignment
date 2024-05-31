const maxSumContiguousSubArray = (arr) => {
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    max = Math.max(sum, max);

    if (sum < 0) sum = 0;
  }
  return max;
  //   If required sum is > 0
  //   if (max < 0) max = 0;
};

console.log(
  maxSumContiguousSubArray([
    -1, 3, 4, -10, 31, 10, 10, -10, 9, -11, 5, 2, 8, -8, 0,
  ])
);
