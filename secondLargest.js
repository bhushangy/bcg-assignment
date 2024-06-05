function secondLargest(arr) {
  let secondLargest = -Infinity;
  let largest = -Infinity;

  for (const ele of arr) {
    if (ele > largest) {
      secondLargest = largest;
      largest = ele;
    } else if (ele > secondLargest) {
      secondLargest = ele;
    }
  }

  return [largest, secondLargest];
}

console.log(secondLargest([4, 1, 4, 63, 6, 23, 2, 6, 46, 21, 7, 0]));
