function merge(arr, low, mid, high) {
    const temp = [];

    let i = low;
    let j = mid + 1;

    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    while (j <= high) {
        temp.push(arr[j]);
        j++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    const mid = Math.floor((low + high) / 2);

    if (low === high) return;

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

    return arr;
}

const arr = [7, 5, 10, 2, 0, 1, 4, -1, 3];
console.log(mergeSort(arr, 0, arr.length - 1));
