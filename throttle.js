const throttle = (fn, wait) => {
  let timerId = null;
  return function (...args) {
    if (!timerId) {
      fn(...args);
      timerId = setTimeout(() => {
        timerId = null;
      }, wait);
    }
  };
};

const throttledFunc = throttle(
  (num) => console.log(`Throttled func ${num}`),
  2000
);

throttledFunc(1);
throttledFunc(2);
throttledFunc(3);

setTimeout(() => throttledFunc(4), 2000);
