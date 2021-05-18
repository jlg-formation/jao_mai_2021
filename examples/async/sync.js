const fs = require('fs');

try {
  const f1 = fs.readdirSync('.');
  console.log('f1: ', f1);
  const f2 = fs.readdirSync('.');
  console.log('f2: ', f2);
  const f3 = fs.readdirSync('.');
  console.log('f3: ', f3);
  const f4 = fs.readdirSync('.');
  console.log('f4: ', f4);
} catch (err) {
  console.log('err: ', err);
}
