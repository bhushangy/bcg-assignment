// const twoSum = (arr, target) => {
//   const map = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (map[target - arr[i]] !== undefined) {
//       return [i, map[target - arr[i]]];
//     } else {
//       map[arr[i]] = i;
//     }
//   }

//   return [-1, -1];
// };

// console.log(twoSum([4, 1, 4, 63, 6, 23, 2, 6, 46, 21, 7, 0], 9));

const twoSum = (arra, target) => {
  let low = 0;
  let high = arra.length - 1;

  let arr = arra.slice().sort((a, b) => a - b);
  let sum = 0;

  while (low < high) {
    sum = arr[low] + arr[high];
    if (sum === target) {
      return true;
    } else if (sum > target) {
      high--;
    } else {
      low++;
    }
  }
  return false;
};

console.log(twoSum([4, 1, 4, 63, 6, 23, 2, 6, 46, 21, 7, 0], 63));
