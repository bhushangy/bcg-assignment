function bubbleSort(arr, n) {
    for (let i = n - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (arr[j] >= arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [7, 5, 10, 12, 0, 1, 4, -1, -3];
console.log(bubbleSort(arr, arr.length));
