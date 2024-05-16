function compare(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);

    for (const key of obj1Keys) {
        if (
            typeof obj1[key] !== 'object' &&
            typeof obj2[key] !== 'object' &&
            obj1[key] !== obj2[key]
        )
            return false;

        if (
            typeof obj1[key] === 'object' &&
            typeof obj2[key] === 'object' &&
            !compare(obj1[key], obj2[key])
        ) {
            return false;
        }
    }
    return true;
}

console.log(
    compare(
        { a: 1, b: 2, c: { d: [1, { a: 1 }] } },
        { a: 1, b: 2, c: { d: [1, { a: 2 }] } }
    )
);
