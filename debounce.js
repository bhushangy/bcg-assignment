'use strict';

// When I invoke `func` inside setTimeout, it is a free function invocation. Free function invocations in javascript have `this` bound to the global scope
// or it will be undefined.

// still wrong
// function debounce(func, wait) {
//   let timeout
//   return (...args) => {
//     const context = this - Here this is bound to the parent's this which is undefined
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.apply(context, args), wait)
//   }
// }

// With normal javascript functions, `this` is bound when the function is called. With arrow functions, `this` is bound to the context in which the function is originally created.

function debounce(func, wait = 0) {
  let timeoutID = null;
  return function (...args) {
    // Keep a reference to `this` so that
    // func.apply() can access it.
    const context = this; // If we remove the code here, then this will be undefined since the function execution inside arrow function is a free execution
    clearTimeout(timeoutID);

    timeoutID = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

function sayHello() {
  console.log('My name is', this.name);
}

const amy = {
  name: 'amy',
  speak: debounce(sayHello),
};

amy.speak();
// 'My name is amy'
