function printPrimes(n) {
  const arr = [];
  for (let i = 2; i < n + 1; i++) arr[i] = 1;

  for (let i = 2; i * i < n + 1; i += 1) {
    if (arr[i] === 1) {
      for (let j = i * i; j < n + 1; j += i) {
        arr[j] = 0;
      }
    }
  }

  for (let i = 2; i < n + 1; i++) {
    if (arr[i] === 1) {
      console.log(i);
    }
  }
}

printPrimes(50);
