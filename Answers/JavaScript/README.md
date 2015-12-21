# JavaScript Questions

## Explain event delegation. 😎

JavaScript event delegation is a simple technique by which you add a single
event handler to a parent element in order to avoid having to add event
handlers to multiple child elements.

[SitePoint](http://www.sitepoint.com/javascript-event-delegation-is-easier-than-you-think/)

## Explain how `this` works in JavaScript. 😎

Within JavaScript your code will always have some form on context.

The way context works is through the `this` variable. The this variable will
always refer to the object that the code is currently inside of. Remember that
global objects are actually properties of the `window` object. This means that
even in a global context, the this variable will still refer to an object
(BOM Browser Object Model || window object).

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

## Explain how prototypal inheritance works. 😎

In JavaScript, the inheritance is prototype-based. That means that there are
no classes. Instead, an object inherits from another object.

[Source](http://javascript.info/tutorial/inheritance)

Steps to create a prototype chain:

**Step 1**

Create a function `NormalHuman`

```javascript
function NormalHuman() {}
```

> The `NormalHuman` function object will have a `prototype` property,
> which is an `object` type
> The `prototype` object will have a `constructor` property
> which points to the `NormalHuman` function

**Step 2**

Create another function `SuperHuman`

```javascript
function SuperHuman() {}
```

**Step 3**

Allow the `SuperHuman` object to extend `NormalHuman` by
setting `SuperHuman.prototype` to an instance of the `NormalHuman` object
created using the `new` keyword

```javascript
SuperHuman.prototype = new NormalHuman();
```

This allows `SuperHuman` to have access to any properties that are set
on `NormalHuman.prototype`:

```javascript
NormalHuman.prototype.walk = function() {
 console.log('is walking');
};

new SuperHuman().walk(); // is walking
```

> View the [example code](Examples/Prototypal-Inheritance.js)
> or an [interactive demo](http://jsbin.com/sitagecono/1/edit?js,console).

[Source](http://www.codeproject.com/Articles/887551/Prototypal-inheritance-in-JavaScript)

**Bonus Points**

While this is often considered to be one of JavaScript's weaknesses, the
prototypal inheritance model is in fact more powerful than the classic model.
It is, for example, fairly trivial to build a classic model on top of a
prototypal model, while the other way around is a far more difficult task.

The lookup time for properties that are high up on the prototype chain can have
a negative impact on performance, and this may be significant in code where
performance is critical.

[JavaScript Garden](https://bonsaiden.github.io/JavaScript-Garden/#object.prototype)

The `prototype` will _also_ have the property `__proto__` which points
`Object.prototype` - This `__proto__` property is used internally by
JavaScript to traverse the "prototype chain"

[Source](http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html)

## What do you think of AMD vs CommonJS? 😎

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

## What is a hash table? 😎

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

## Explain why the following doesn't work as an IIFE: `function foo(){ }();` 😎

The most widely accepted way to tell the parser to expect a function
expression is just to wrap in in parens, because in JavaScript, parens
can’t contain statements. At this point, when the parser encounters the
function keyword, it knows to parse it as a function expression and not
a function declaration.

[Matthew Zhong](https://flowerszhong.github.io/2013/11/20/javascript-questions.html)

Definition of syntax and naming convention by [Ben Alman](http://benalman.com/news/2010/11/immediately-invoked-function-expression/).

### What needs to be changed to properly make it an IIFE? 😎

 Should be:

 ```javascript
 (function foo(){ })().
 ```

## What's the difference between a variable that is `null`, `undefined` or "undeclared"? 😎

**Undeclared** variables are those that are not declared in the program (do
  not exist at all). Trying to read their values gives runtime error, however if
  undeclared variables are assigned then implicit declaration is done.

**Undefined** variables are those that are not assigned any value but are
declared in the program. Trying to read such variables gives the `undefined`
primitive type value.

**Null** is the value of nothing. A variable may be declared and assigned a
`null` value.

### How would you go about checking for any of these states? 😎

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

## What is a closure, and how/why would you use one? 😎

How closures work by [Lucy Bain](http://lucybain.com/blog/2014/closures/).

Uses include:

*   Hiding state -> [Example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Practical_closures)
*   Classical OO in JavaScript
*   Object factories
*   Events and callbacks

Sources:

*   [Howto Node](http://howtonode.org/why-use-closure)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Practical_closures)

## What's a typical use case for anonymous functions? 😎

Anonymous functions are passed as parameters to other functions to be used as
callbacks.

Answer by [Lucy Bain](http://lucybain.com/blog/2014/anonymous-functions/).

## How do you organize your code? (module pattern, classical inheritance? 😎

Should mention:

*   [ES6](http://www.sitepoint.com/understanding-es6-modules/)
or [CommonJS](http://spinejs.com/docs/commonjs) modules

*   [Module](http://eloquentjavascript.net/10_modules.html) vs [components](http://addyosmani.com/first/)

*   [Namespacing](http://www.codeproject.com/Articles/553922/Javascript-namespacing) and [API design](http://webstandardssherpa.com/reviews/secrets-of-awesome-javascript-api-design/)

*   Package manager such as [NPM](https://www.npmjs.com), [Bower](http://bower.io/), [JSPM](http://jspm.io/)

*   Module loader such as [Browserify](http://browserify.org/), [webpack](https://webpack.github.io/) or [SystemJS](https://github.com/systemjs/systemjs)

*   Managing local modules while avoiding
[`require()`](https://gist.github.com/branneman/8048520)
paths that look like [`../../../../../../..`](https://github.com/substack/browserify-handbook#avoiding-)

*   [Separation of Concerns](https://viget.com/extend/client-side-separation-of-concerns-are-we-doing-it-wrong) vs. [Separation of Technologies](http://www.bitnative.com/2015/03/18/is-separating-html-and-javascript-harmful/)

*   **Bonus Points** [Domain Driven Development](https://en.wikipedia.org/wiki/Domain-driven_design) and [Domain Specific Languages](https://en.wikipedia.org/wiki/Domain-specific_language)

*   Looking for a file structure that resembles:

```bash
.
├── pages
│   │
|   ├── index.html
|   ├── index.css
|   ├── index.js
|   ├── ...
│   │
│   ├── page-one
|   |   ├── index.html
│   │   └── ...
│   │
│   └── page-two
│       └── ...
│
├── modules
│   │
│   ├── header
│   │   |
│   │   ├── index.tmpl
│   │   ├── index.css
│   │   ├── index.js
│   │   └── ...
│   │
│   └── footer
│       └── ...
│
└── components
    │
    ├── button
    │   └── ...
    │
    └── input
        └── ...
```

## What's the difference between host objects and native objects? 😎

**Native** objects are those supplied by JavaScript.
Examples of these are String, Number, Array, Image, Date, Math, etc.

**Host** objects are those supplied to JavaScript by the host environment.

Examples of global objects [specific to browsers](https://developer.mozilla.org/en-US/docs/Web/API) are:

*   `window`
*   `document`
*   `forms`

Examples of global objects [specific to Node.js](https://nodejs.org/api/globals.html) are:

*   `__dirname`
*   `process`
*   `exports`

Examples global objects shared between environments are:

*   `console`
*   `setInterval`
*   `clearTimeout`

Short answer by [Matthew Zhong](https://flowerszhong.github.io/2013/11/20/javascript-questions.html).

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2014/host-vs-native/).

## Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`? 😎

`function Person(){} `defines a function. The
  capital letter at the beginning of the function name indicates
  that it’s a constructor.

`var person = new Person()` is one way to create new objects.
Using this method person will have access to everything
`Person.prototype` has access to, as well as any instance
variables set in the `Person` constructor.

`var person = Person()` is a mistake. There are ways of
dealing with mistakes like this (my preference is the
`'use strict'` method), but ultimately this should be corrected.

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2015/js-new-keyword-and-functions/).

## What's the difference between `.call` and `.apply`? 😎

The main difference is that apply lets you invoke the function with arguments
as an array; call requires the parameters be listed explicitly.

Examples:

```javascript
theFunction.apply(valueForThis, arrayOfArgs);

theFunction.call(valueForThis, arg1, arg2, …);
```

## Explain `Function.prototype.bind`. 😎

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

## When would you use `document.write()`? 😎

It's an unobtrusive way to synchronously include HTML tags into a page while
it is loading, if JavaScript is enabled.

[QuirksMode](http://www.quirksmode.org/blog/archives/2005/06/three_javascrip_1.html)

It is commonly used in [snippets of HTML](http://stackoverflow.com/a/802894)
given to consumers to enable services on their web site.

It is [generally considered bad practice](http://javascript.info/tutorial/document-write#the-benefits-and-uses)
because loading a file that is slow or fails to load,
or a script that is slow or fails to execute,
may block the rest of page from rendering.

Perhaps the best use is as an
[offline fallback loader](http://stackoverflow.com/a/7354319)
for CDN hosted resources.

When using, there are risks [to be aware of](https://developer.mozilla.org/en-US/docs/Web/API/Document/write).

## What's the difference between feature detection, feature inference, and using the UA string? 😎

Short answer from [Stack Overflow](http://stackoverflow.com/a/20105161).

Detailed answer from [here](http://lucybain.com/blog/2014/feature-detection-vs-inference/).

**TL;DR** If you don't know what _feature inference_ is
and are using [Modernizr](https://modernizr.com/),
you're probably ok.

Points for naming [any browser feature](https://developer.mozilla.org/en-US/docs/Browser_Feature_Detection).

## Explain AJAX in as much detail as possible. 😎

*   Stands for (**A**)synchronous (**J**)avaScript (**a**)nd (**X**)ML

*   Typically makes use of the `XMLHttpRequest` (XHR) object

*   Typically used to request JSON data to update parts of a
page without a full page refresh

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2015/js-how-does-ajax-work/).

## Explain how JSONP works (and how it's not really AJAX). 😎

How JSONP is different from AJAX:

*   Can only work with a JSONP enabled server API
*   Can only use the HTTP `GET` method
*   _Can make cross domain requests_

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2015/js-how-does-jsonp-work/).

## Have you ever used JavaScript templating? 😎

```html
<p>Your answer is, "{{ answer | capitalize | replace("Yes", "No" }}!"</p>
```

### If so, what libraries have you used? 😎

Looking for:

*   [Handlebars](http://handlebarsjs.com/) or [Mustache](https://mustache.github.io/)
*   [Swig](https://paularmstrong.github.io/swig/) or [Nunjucks](https://mozilla.github.io/nunjucks/)
*   [Underscore](https://lodash.com/docs#template) or [EJS](http://www.embeddedjs.com/)
*   [Jade](http://jade-lang.com/)

## Explain "hoisting". 😎

Function declarations and variable declarations are always moved (“hoisted”)
invisibly to the top of their containing scope by the JavaScript interpreter.

This means that code like this:

```javascript
function foo() {
    bar();
    var x = 1;
}
```

Is actually interpreted like this:

```javascript
function foo() {
    var x;
    bar();
    x = 1;
}
```

Short answer from [Matthew Zhong](https://flowerszhong.github.io/2013/11/20/javascript-questions.html).

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2014/hoisting/).

Further explanation from [SitePoint](http://www.sitepoint.com/back-to-basics-javascript-hoisting/).

## Describe event bubbling. 😎

**Event Flow** describes the order in which events are received on the page.
An event has three phases to its life cycle: capture, target, and bubbling.

**Event Bubbling** means that an event start at the most specific element
(the deepest possible point to the document tree) and then flow upward
toward the least specific node(the document).

Short answer from [Matthew Zhong](https://flowerszhong.github.io/2013/11/20/javascript-questions.html).

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2014/event-bubbling/).

## What's the difference between an "attribute" and a "property"? 😎

Attributes carry additional information about an HTML element and come in
name=”value” pairs.

Property is a representation of an attribute in the HTML DOM tree. So the
attribute in the example above would have a property named `className` with a
value of `my-class`.

So Attributes are in your HTML text document/file, whereas properties are in
HTML DOM tree.

## Why is extending built-in JavaScript objects not a good idea? 😎

Extending native built-ins with custom methods immediately
makes "collision" problem apparent.
It violates "[don't modify objects you don't own](http://www.nczonline.net/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/)"
principle, and makes code not future-proof.

[Source](http://perfectionkills.com/extending-native-builtins/)

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2014/js-extending-built-in-objects/).

## Difference between document load event and document ready event? 😎

The **Ready** event occurs when the DOM is ready. _This is a jQuery event_.

The **Load** event occurs when the page fully loaded. This includes inner
frames, images etc.

Short answer from [Matthew Zhong](https://flowerszhong.github.io/2013/11/20/javascript-questions.html).

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2014/js-document-load-vs-ready/).

The `ready` event occurs after the HTML document has been loaded, while the
`onload` event occurs later, when all content (e.g. images) also has
been loaded.

The `onload` event is a standard event in the DOM, while the `ready` event is
specific to **jQuery**. The purpose of the `ready` event is that it should
occur as early as possible after the document has loaded, so that code that
adds functionality to the elements in the page doesn’t have to wait for all
content to load.

## What is the difference between `==` and `===`? 😎

The `==` operator will compare for equality after doing any
necessary type conversions. The `===` operator will not do the
conversion, so if two values are not the same type `===` will
simply return false. It's this case where `===` will be faster,
and may return a different result than `==.` In all other cases
performance will be the same.

Short answer from [Matthew Zhong](https://flowerszhong.github.io/2013/11/20/javascript-questions.html).

Detailed answer from [Lucy Bain](http://lucybain.com/blog/2014/triple-vs-double-equals/).

## Explain the same-origin policy with regards to JavaScript. 😎

Prevent malicious attacks by stopping code from another site
executing on your site. An attacks like this is known as a
[Cross Site Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
attack.

JavaScript will only execute if it is hosted from the same
subdomain, domain and port using the same protocol as the
document it is being loaded from.

Answer from [Lucy Bain](http://lucybain.com/blog/2014/same-origin-policy/).

## Make this work: `duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]`. 😎

```javascript
duplicate(input) {
  return input.concat(input);
}
```

## Why is it called a Ternary expression, what does the word "Ternary" indicate? 😎

A unary operand accepts one parameter, e.g. `-1`, where `-` is the operand,
and `1` is the parameter.

A binary operand accepts two parameters, e.g. `2 + 3`, where `+` is the operand,
and `2` and `3` are the parameters.

A ternary operand accepts three parameters:

```javascript
conditional ? truthy_block : falsy_block
```

In JS, ternarys are often used for assignment:

```javascript
const isAlwaysSunny = isPhiladelphia ? true : false;
```

Answer from [Lucy Bain](http://lucybain.com/blog/2014/js-ternary/)

## What is `"use strict";`? what are the advantages and disadvantages to using it? 😎

Strict mode throws more errors and disables some features in an effort to make
your code more robust, readable, and accurate.

Advantages:

*   It catches some common coding bloopers, throwing exceptions.

*   It prevents, or throws errors, when relatively “unsafe” actions are taken
(such as gaining access to the global object).

*   It disables features that are confusing or poorly thought out.

Disadvantages:

*   Confuses developers who don't use it...

Answer from [Lucy Bain](http://lucybain.com/blog/2014/js-use-strict/)

## Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`. 😎

```javascript
for (var i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
```

[Source](http://www.ineverylang.com/fizz-buzz/javascript/)

```javascript
for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}
```

More solutions on [GitHub](https://gist.github.com/jaysonrowe/1592432#gistcomment-790724)

## Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it? 😕

## Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those? 😕

## Explain what a single page app is and how to make one SEO-friendly. 😕

## What is the extent of your experience with Promises and/or their polyfills? 😕

## What are the pros and cons of using Promises instead of callbacks? 😕

## What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript? 😕

## What tools and techniques do you use debugging JavaScript code? 😕

## What language constructions do you use for iterating over object properties and array items? 😕

## Explain the difference between mutable and immutable objects. 😕

### What is an example of an immutable object in JavaScript? 😕

### What are the pros and cons of immutability? 😕

### How can you achieve immutability in your own code? 😕

## Explain the difference between synchronous and asynchronous functions. 😕

## What is event loop? 😕

### What is the difference between call stack and task queue? 😕
