console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
new Promise((resolve, reject) => resolve(console.log(3)));
new Promise(resolve => resolve(console.log(4))).then(() => console.log(5));
Promise.resolve(console.log(6))
Promise.resolve().then(() => console.log(7));
console.log(8);
