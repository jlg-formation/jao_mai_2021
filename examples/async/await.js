const fs = require('fs');

const readdir = fs.promises.readdir;

const main = async () => {
  try {
    const f1 = await readdir('.');
    console.log('f1: ', f1);
    const f2 = await readdir('.');
    console.log('f2: ', f2);
    const f3 = await readdir('.');
    console.log('f3: ', f3);
    const f4 = await readdir('.');
    console.log('f4: ', f4);
  } catch (err) {
    console.log('err: ', err);
  }
};

main();
