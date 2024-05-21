function flattenObject(obj) {
    const keys = Object.keys(obj);
    let res = {};
    for (let i = 0; i < keys.length; i++) {
        if (typeof obj[keys[i]] === 'object' || !Array.isArray(obj[keys[i]])) {
            res = Object.assign(res, flattenObject(obj[keys[i]]));
        } else {
            res[keys[i]] = obj[keys[i]];
        }
    }
    return res;
}

console.log(flattenObject({ a: 1, b: { c: 3, d: [1, 2, 3, 4] }, e: { f: 5 } }));
