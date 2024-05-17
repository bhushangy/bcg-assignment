function isObject(obj) {
    return typeof obj === 'object' ? true : false;
}

function deepCompare(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    if (obj1Keys.length !== Object.keys(obj2).length) return false;

    for (let key of obj1Keys) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        const objectCheck = isObject(val1) && isObject(val2);

        if (!objectCheck && val1 !== val2) return false;

        if (objectCheck && !deepCompare(val1, val2)) return false;
    }
    return true;
}

console.log(
    deepCompare(
        { a: 1, b: [1, 2, 3], c: { d: [1, 2, 3, { e: [4, { a: 112 }] }] } },
        { a: 1, b: [1, 2, 3], c: { d: [1, 2, 3, { e: [4, { a: 111 }] }] } }
    )
);

console.log(deepCompare({ e: [4, { a: [1, {}] }] }, { e: [4, { a: [1, {}] }] }));
