var a = 3;
var b = a;
console.log('a: ', a);
console.log('b: ', b);

a = 4;

console.log('a: ', a);
console.log('b: ', b);

var c = {
  toto: 34,
};
var d = c;
console.log('c: ', c);
console.log('d: ', d);

c.toto = 67;

console.log('c: ', c);
console.log('d: ', d);

var clone1 = function (o) {
  return JSON.parse(JSON.stringify(o));
};

var e = clone1(c);
console.log('e: ', e);
e.toto = 78;

console.log('c: ', c);
console.log('d: ', d);
console.log('e: ', e);

var f = {
  toto: 23,
  titi() {
    console.log('titi');
  },
  tata: {
    a: 3,
  },
  tutu: [1, 4, 67],
};
console.log('f: ', f);
console.log('json f: ', JSON.stringify(f));

function clone2(o) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(o)) {
    if (typeof o[key] === 'object' && o !== null) {
      result[key] = clone2(o[key]);
      continue;
    }
    result[key] = o[key];
  }
  Object.setPrototypeOf(result, Object.getPrototypeOf(o));
  return result;
}

var g = clone2(f);
g.toto = 45;
g.tata.a = 6;
console.log('g: ', g);
console.log('f: ', f);
