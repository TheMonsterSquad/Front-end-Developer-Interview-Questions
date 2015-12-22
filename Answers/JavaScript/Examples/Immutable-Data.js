/* eslint-env es6 */
/* jshint esnext: true */

(function IIFE() {

  'use strict';

  // Object
  const objA = Object.freeze({
    foo: 'bar'
  });

  // Copy
  const objB = Object.assign({}, objA);

  // Update
  objB.foo = 'baz';

  console.log(`objA.foo: ${objA.foo}`);

  // -> objA.foo: bar

  console.log(`objB.foo: ${objB.foo}`);

  // -> objB.foo: baz

  // Array
  const arrA = Object.freeze([
    objA.foo
  ]);

  // Copy
  const arrB = arrA.slice();

  // Update
  arrB[0] = objB.foo;

  console.log(`arrA: ${arrA}`);

  // -> arrA: bar

  console.log(`arrB: ${arrB}`);

  // -> arrB: baz

  // Strings (are immutable)
  const strA = objA.foo;

  // Copy & Update
  const strB = strA.replace(objA.foo, objB.foo);

  console.log(`strA: ${strA}`);

  // -> strA: bar

  console.log(`strB: ${strB}`);

  // -> strB: baz

})();
