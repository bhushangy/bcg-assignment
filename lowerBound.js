// Insert position - Search for an element in the array. If present return its index, else give the index
// where it needs to be inserted such that array is sorted.

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
console.log(lowerBound(arr, 0, arr.length - 1, 11));

// function upperBound(arr, low, high, target) {
//   let ans = arr.length;
//   let mid;
//   while (low <= high) {
//     mid = Math.floor((low + high) / 2);
//     if (arr[mid] > target) { // Sign is the only change
//       ans = mid;
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return ans;
// }
