function mergeIntervals(arr) {
    const inputArr = arr.slice().sort((a, b) => a[0] - b[0]);

    const outputArr = [inputArr[0]];

    for (const [currStart, currEnd] of inputArr.slice(1)) {
        const prevEnd = outputArr.at(-1)[1];

        if (currStart <= prevEnd) {
            outputArr[outputArr.length - 1][1] = Math.max(prevEnd, currEnd);
        } else {
            outputArr.push([currStart, currEnd]);
        }
    }

    return outputArr;
}

console.log(
    mergeIntervals([
        [5, 8],
        [2, 4],
        [1, 3],
        [1, 10],
        [10, 12],
        [6, 11],
        [4, 4],
        [6, 7],
    ])
);
