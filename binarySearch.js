function binarySearch(arr, low, high, target) {
  if (low > high) return -1; // Search space exhausted. So exit from all the functions.

  let mid = Math.ceil((low + high) / 2);

  if (arr[mid] === target) return mid;

  if (target > arr[mid]) return binarySearch(arr, mid + 1, high, target);
  else return binarySearch(arr, low, mid - 1, target);
}

const arr = [1, 5, 8, 10, 14, 20, 50, 61];
console.log(binarySearch(arr, 0, arr.length - 1, 61));

// function binarySearch(arr, n, target) {
//     let low = 0;
//     let high = n - 1;
//     let mid;
//     while (low <= high) { If element is at end or beginning, low is equal to high, hence the condition low <= high and not low < high
//       mid = Math.ceil((low + high) / 2);

//       if (arr[mid] === target) return mid;

//       if (target > arr[mid]) low = mid + 1;
//       else high = mid - 1;
//     }

//     return -1;
//   }
