function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function findPartitionIndex(arr, low, high) {
    const pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i < high) {
            i++;
        }

        while (arr[j] > pivot && j > low) {
            j--;
        }

        if (i < j) {
            swap(arr, i, j);
        }
    }

    swap(arr, low, j);
    return j;
}

function quickSort(arr, low, high) {
    // If length of arr is 1, then no need to sort
    if (low < high) {
        const partitionIndex = findPartitionIndex(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
}

const arr = [-3, 4, 1, 9, -1, 14, 3, 10, 7, 0, 12, -29, 21, 15, 5, 8];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
