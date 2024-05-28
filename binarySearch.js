function binarySearch(arr, n, target) {
  let low = 0;
  let high = n - 1;
  let mid;
  while (low <= high) {
    mid = Math.ceil((low + high) / 2);

    if (arr[mid] === target) return mid;

    if (target > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

const arr = [61];
console.log(binarySearch(arr, arr.length, 61));
