'use strict';

// Note myCall cannot be an arroew function. this will be undefined
function myCall(thisArg, ...args) {
  const context = thisArg;
  let uniqueKey = Math.random();

  while (context.hasOwnProperty(uniqueKey)) {
    uniqueKey = Math.random();
  }

  context[uniqueKey] = this;

  const res = context[uniqueKey](...args);
  delete context[uniqueKey];
  return res;
}

function callMe() {
  console.log(`My name is ${this.name}`);
  return 100;
}

Function.prototype.myCall = myCall;

console.log(callMe.myCall({ name: 'Bhushan' }));
