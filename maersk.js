// const test1 = {
//   name: 'test1',
//   a() {
//     console.log('test 1', this.name);
//   },
// };

// const test2 = {
//   name: 'test2',
//   b() {
//     const c = () => {
//       console.log(this.name);
//     };
//     c();
//   },
// };

// // test1.a();
// // test2.b();

// test2.b();

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i));
// }

// const str = 'i am in bangalore';
// const obj = {};
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ' ') continue;
//   if (obj[str[i]] !== undefined) {
//     obj[str[i]] += 1;
//   } else {
//     obj[str[i]] = 1;
//   }
// }
// console.log(obj);

// const obj = {
//   firstName: 'a',
//   lastName: 'a',
// };

// const { a, b } = obj;

// function ab(x) {
//   return (y) => {
//     return (z) => {
//       return x + y + z;
//     };
//   };
// }

// console.log(ab(10)(20)(30));

// function twoSum() {
//   const arr = this;
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// }

// Array.prototype.twoSum = twoSum;

// console.log([1, 2].twoSum());

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     alert(i);
//   }, 1000 + i);
// }
