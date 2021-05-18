const fs = require('fs');

fs.readdir('.', function (err, f1) {
  console.log('f1: ', f1);
  fs.readdir('.', function (err, f2) {
    console.log('f2: ', f2);
    fs.readdir('.', function (err, f3) {
      console.log('f3: ', f3);
      fs.readdir('.', function (err, f4) {
        console.log('f4: ', f4);
      });
    });
  });
});
console.log('coucou');
