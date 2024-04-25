const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2');
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p3');
  }, 4000);
});

Promise.all([p1, p2, p3]).then(
  (res) => {
    console.log('all', res);
  },
  (err) => {
    console.log('all', err);
  }
); // Waits till all promises are resolved.

Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log('allSettled', res);
}); // Waits till all promises are resolved.

Promise.any([p1, p2, p3]).then((res) => {
  console.log('any', res);
}); // Does not wait till all promises are resolved. Returns the first resolved promise.

Promise.race([p1, p2, p3]).then((res) => {
  console.log('race', res);
}); // Waits till the first promise is resolved.

// Promise.race - To be used to track async calls that take a lot of time