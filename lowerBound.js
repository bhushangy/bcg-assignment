function lowerBound(arr, low, high, target) {
  let ans = arr.length;
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

const arr = [-3, 4, 5, 9, 10, 32, 65, 110];
console.log(lowerBound(arr, 0, arr.length - 1, 661));
