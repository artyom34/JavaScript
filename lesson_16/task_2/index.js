'use strict';

export default foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }

  return foo;
}

var foo = bar();

console.log(foo);