Promise.race = function (iterable) {
  const arr = [...iterable].map((item) => (item instanceof Promise ? item : Promise.resolve(item)));
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
      arr[i].then((val) => {
        resolve(val);
      }, reject);
    }
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
