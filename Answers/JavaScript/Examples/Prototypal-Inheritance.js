/* jshint esnext: true */
/* eslint-env es6 */

(function IIFE() {

  'use strict';

  /**
   * Normal Human
   */

  function NormalHuman(options) {

    Object.keys(options || {}).map(key => this[key] = options[key]);

  }

  NormalHuman.prototype.walk = function walk() {

    console.log(`${this.name} is walking`);

  };

  /**
   * Super Human
   */
  function SuperHuman(options) {

    SuperHuman.prototype.constructor.call(this, options);

  }

  SuperHuman.prototype = new NormalHuman();
  SuperHuman.prototype.fly = function fly() {

    console.log(`${this.name} is flying`);

  };

  /**
   * Instantiate
   */

  const normalHuman = new NormalHuman({
    name: 'Clarke Kent'
  });

  const superHuman = new SuperHuman({
    name: 'Superman'
  });

  /**
   * Activate
   */

  // Clark Kent is walking
  normalHuman.walk();

  // Superman is walking (using method from `NormalHuman`)
  superHuman.walk();

  // Superman is walking (using method from `SuperHuman`)
  superHuman.fly();

})();
