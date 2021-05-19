'use strict';
console.log('global this: ', this);

function main() {
  console.log('function this: ', this);
}

main();

new main();

function x() {
  var a = {
    toto: 34,
    titi: 'str',
    hello: function () {
      console.log('method this: ', this);
    },
    bonjour: () => {
      console.log('bonjour method this: ', this);
    },
  };

  a.hello();

  var hello = a.hello;
  hello();
  console.log('x this: ', this);
  a.bonjour();
}

x();

var $ = document.querySelector.bind(document);

var body = $('body');
console.log('body: ', body);

var $$ = document.querySelector;

var body2 = $$.call(document, 'body');
console.log('body2: ', body2);

var body3 = $$.apply(document, ['body']);
console.log('body3: ', body3);
