Promise.all = function (iterable) {
  let arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item));
  if (arr.length === 0) return Promise.resolve([]);
  let count = 0;
  const results = [];
  return new Promise((resolve, reject) => {
    for(let i = 0; i < arr.length; i++) {
      arr[i].then((value) => {
        count++;
        // 为了保证results的顺序和arr一致
        results[i] = value;
        // results.push(value);
        if (count === arr.length) resolve(results);
      }, reject)
    }
  })
  
}


var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});