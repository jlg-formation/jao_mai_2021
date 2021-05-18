const c = {};
Object.setPrototypeOf(c, null);
c.__proto__ = {titi: 2};
console.log('c: ', c);
console.log('c proto: ', Object.getPrototypeOf(c));
