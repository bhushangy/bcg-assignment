function firstOccurence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let first = -1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return first;
}

function lastOccurence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let last = -1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return last;
}

function firstAndLastOccurence(arr, target) {
  const first = firstOccurence(arr, target);
  if (first === -1) {
    return [-1, -1];
  }
  const last = lastOccurence(arr, target);
  return [first, last];
}

const arr = [1, 2, 43, 43, 45, 46, 49, 50, 52, 56, 60, 61, 61];
console.log(firstAndLastOccurence(arr, 61));
