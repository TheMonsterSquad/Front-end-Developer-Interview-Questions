# JavaScript Questions

*   :sunglasses: Explain event delegation

JavaScript event delegation is a simple technique by which you add a single
event handler to a parent element in order to avoid having to add event
handlers to multiple child elements.

[Sitepoint](http://www.sitepoint.com/javascript-event-delegation-is-easier-than-you-think/)

*   :sunglasses: Explain how `this` works in JavaScript

Within JavaScript your code will always have some form on context.
The way context works is through the `this` variable. The this variable will
always refer to the object that the code is currently inside of. Remember that
global objects are actually properties of the `window` object. This means that
even in a global context, the this variable will still refer to an object
(BOM Browser Object Model || window object).

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

*   :confused: Explain how prototypal inheritance works
*   :sunglasses: What do you think of AMD vs CommonJS?

CommonJS is a project to define a common API and ecosystem for JavaScript. One
part of CommonJS is the Module specification. Node.js and RingoJS are
server-side JavaScript runtimes, and yes, both of them implement modules based
on the CommonJS Module spec.

AMD (Asynchronous Module Definition) is another specification for modules.
RequireJS is probably the most popular implementation of AMD. One major
difference from CommonJS is that AMD specifies that modules are loaded
asynchronously – that means that modules are only loaded as they are
needed, as opposed to loading all modules up front.

AMD is generally more used in client-side (in-browser) JavaScript development
due to this, and CommonJS Modules are generally used server-side. However,
you can use either module spec in either environment – for example, RequireJS
offers directions for running in Node.js and browserify is a CommonJS Module
implementation that can run in the browser

*   :sunglasses: What is a hash table?

It is also known as hash map is a data structure used to implement an
associative array.It is a structure that can map keys to values.

**How it works?**

A hash table uses a hash function to compute an index into an array of buckets
or slots, from which the correct value can be found.

**Advantages**

In a well-dimensioned hash table, the average cost for each lookup is
independent of the number of elements stored in the table.

Many hash table designs also allow arbitrary insertions and deletions of
key-value pairs.

In many situations, hash tables turn out to be more efficient than search trees
or any other table lookup structure.

**Disadvantages**

The hash tables are not effective when the number of entries is very small.
(However, in some cases the high cost of computing the hash function can be
  mitigated by saving the hash value together with the key.)

**Uses**

They are widely used in many kinds of computer software, particularly for
associative arrays, database indexing, caches and sets.

*   :sunglasses: Explain why the following doesn't work as an IIFE:
`function foo(){ }();`.

*   :sunglasses: What needs to be changed to properly make it an IIFE?

The Immediately-Invoked Function Expression (IIFE) has it’s syntax to work like:
`(function(){})();` so to make this function work it should be `(foo(){})().`

[Source](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

*   :sunglasses: What's the difference between a variable that is: `null`,
    `undefined` or undeclared?

    *   :sunglasses: How would you go about checking for any of these states?

**Undeclared**   variables are those that are not declared in the program (do
  not exist at all). Trying to read their values gives runtime error, however if
  undeclared variables are assigned then implicit declaration is done.

**Undefined**   variables are those that are not assigned any value but are
declared in the program. Trying to read such variables gives the `undefined`
primitive type value.

**Null**   is the value of nothing. A variable may be declared and assigned a
`null` value.

Check for:

```javascript
if (typeof(variable) !== 'undefined') {
  console.log('variable is not `undefined`');
  if (variable === null) {
    // for declaration & assignment `var variable = null;`
    console.log('variable is `null`');
  }
} else {
  console.log('variable is undefined or undeclared');
  try {
    (variable === undefined);
    // for declaration `var variable;`
    console.log('variable is `undefined`');
  } catch(e) {
    // for no declaration
    console.log('variable is undeclared');
  }
}
```

[Source](http://lucybain.com/blog/2014/null-undefined-undeclared/)

*   :confused: What is a closure, and how/why would you use one?
*   :sunglasses: What's a typical use case for anonymous functions?

Anonymous unctions are passed as parameters to other functions to be used as
callbacks.

*   :confused: How do you organize your code? (module pattern, classical
  inheritance?)

*   :confused: What's the difference between host objects and native objects?

*   :confused: Difference between: `function Person(){}`,
  `var person = Person()`, and `var person = new Person()`?

*   :sunglasses: What's the difference between `.call` and `.apply`?

The main difference is that apply lets you invoke the function with arguments as
an array; call requires the parameters be listed explicitly.

Examples:

```javascript
theFunction.apply(valueForThis, arrayOfArgs);
theFunction.call(valueForThis, arg1, arg2, …);
```

*   :sunglasses: Explain `Function.prototype.bind`.

Creates a new function that, when called, has its this keyword set to the
provided value, with a given sequence of arguments preceding any provided
when the new function is called.

Example:

```javascript
var x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};
module.getX(); // 81
var getX = module.getX;
getX(); // 9, because in this case, `this` refers to the global object
// create a new function with `this` bound to module
var boundGetX = getX.bind(module);
boundGetX(); // 81
```

*   :confused: When would you use `document.write()`?

*   :confused: What's the difference between feature detection, feature
inference, and using the UA string?

*   :confused: Explain AJAX in as much detail as possible.

*   :confused: Explain how JSONP works (and how it's not really AJAX).

*   :confused: Have you ever used JavaScript templating?

    *   :confused: If so, what libraries have you used?

*   :confused: Explain "hoisting".

*   :confused: Describe event bubbling.

*   :sunglasses: What's the difference between an "attribute" and a "property"?

Attributes carry additional information about an HTML element and come in
name=”value” pairs.

Property is a representation of an attribute in the HTML DOM tree. So the
attribute in the example above would have a property named `className` with a
value of `my-class`.

So Attributes are in your HTML text document/file, whereas properties are in
HTML DOM tree.

*   :confused: Why is extending built-in JavaScript objects not a good idea?

*   :sunglasses: Difference between document load event and document ready
event?

The `ready` event occurs after the HTML document has been loaded, while the
`onload` event occurs later, when all content (e.g. images) also has
been loaded.

The `onload` event is a standard event in the DOM, while the `ready` event is
specific to **jQuery**. The purpose of the `ready` event is that it should
occur as early as possible after the document has loaded, so that code that
adds functionality to the elements in the page doesn’t have to wait for all
content to load.

*   :confused: What is the difference between `==` and `===`?
*   :confused: Explain the same-origin policy with regards to JavaScript.
*   :confused: Make this work:

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

*   :confused: Why is it called a Ternary expression, what does the word
"Ternary" indicate?

*   :confused: What is `"use strict";`? what are the advantages and
disadvantages to using it?

*   :confused: Create a for loop that iterates up to `100` while outputting
**"fizz"**   at multiples of `3`, **"buzz"**   at
 multiples of `5` and **"fizzbuzz"**   at multiples of `3` and `5`

*   :confused: Why is it, in general, a good idea to leave the global scope of
a website as-is and never touch it?

*   :confused: Why would you use something like the `load` event? Does this
event have disadvantages? Do you know any alternatives, and why would you
use those?

*   :confused: Explain what a single page app is and how to make one
SEO-friendly.

*   :confused: What is the extent of your experience with Promises and/or
their polyfills?

*   :confused: What are the pros and cons of using Promises instead
of callbacks?

*   :confused: What are some of the advantages/disadvantages of writing
JavaScript code in a language that compiles to JavaScript?

*   :confused: What tools and techniques do you use debugging JavaScript code?

*   :confused: What language constructions do you use for iterating over object
properties and array items?

*   :confused: Explain the difference between mutable and immutable objects.

    *   :confused: What is an example of an immutable object in JavaScript?
    *   :confused: What are the pros and cons of immutability?
    *   :confused: How can you achieve immutability in your own code?

*   :confused: Explain the difference between synchronous and
asynchronous functions.

*   :confused: What is event loop?

    *   :confused: What is the difference between call stack and task queue?
