const obj = { a1: { b1: { c1: 'SS' } } };

const deepCopy = (val) => {
    if (['string', 'boolean', 'number'].includes(typeof val)) {
        return val;
    } else if (Array.isArray(val)) {
        return val.map((item) => deepCopy(item));
    } else {
        return Object.keys(val).reduce((acc, key) => {
            acc[key] = deepCopy(val[key]);
            return acc;
        }, {});
    }
};

const clone = deepCopy(obj);
obj['a1']['b1'] = 10;
console.log(clone)
console.log(obj)