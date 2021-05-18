const fs = require('fs');

const readdir = function (dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, function (err, result) {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

readdir('.')
  .then((f1) => {
    console.log('f1: ', f1);
    return readdir('.');
  })
  .then((f2) => {
    console.log('f2: ', f2);
    return readdir('.');
  })
  .then((f3) => {
    console.log('f3: ', f3);
    return readdir('.');
  })
  .then((f4) => {
    console.log('f4: ', f4);
  })
  .catch((err) => {
    console.log('err: ', err);
  });
console.log('coucou');
