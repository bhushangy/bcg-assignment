'use strict';

// Note myCall cannot be an arroew function. this will be undefined
function myApply(thisArg, args) {
  const context = thisArg;
  let uniqueKey = Math.random();

  while (context.hasOwnProperty(uniqueKey)) {
    uniqueKey = Math.random();
  }

  context[uniqueKey] = this;

  const res = context[uniqueKey](args);
  delete context[uniqueKey];
  return res;
}

function applyMe(params) {
  console.log(`My name is ${this.name}`);
  console.log(params);
  return 100;
}

Function.prototype.myApply = myApply;

console.log(applyMe.myApply({ name: 'Bhushan' }, [1, 2, 3]));
