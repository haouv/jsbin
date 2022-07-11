Promise.allSettled = (iterable) => {
  const arr = [...iterable].map(item => item instanceof Promise ? item : Promise.resolve(item));
  const results = [];
  let count = 0;
  return new Promise((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
          arr[i].then(value => {
            results[i] = {status: 'fulfilled', value}
          }, reason => {
            results[i] = {status: 'rejected', reason}
          }).finally(() => {
            count++;
            if (count === arr.length) {
              resolve(results);
            }
          })
      }
  });
}