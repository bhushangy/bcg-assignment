function memoise(fn) {
    let cache = {};
    return function (...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            console.log('cached res');
            return cache[key];
        }
        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

function multiply(a, b, c) {
    return a + b + c;
}

const memoisedMultiply = memoise(multiply);

console.log(memoisedMultiply(1, 2, 3));
console.log(memoisedMultiply(1, 2, 3));
console.log(memoisedMultiply(1, 2, 3));
console.log(memoisedMultiply(1, 2, 4));
console.log(memoisedMultiply(1, 2, 4));
console.log(memoisedMultiply(3, 2, 1));
