Promise.any = function (iterable) {
  const arr = [...iterable].map((item) => (item instanceof Promise ? item : Promise.resolve(item)));
  let count = 0;
  let rejectResults = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            rejectResults[i] = reason;
          }
        )
        .finally(() => {
          count++;
          if (count === arr.length) {
            reject(rejectResults);
          }
        });
    }
  });
};
