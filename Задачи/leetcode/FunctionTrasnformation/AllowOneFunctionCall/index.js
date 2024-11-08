/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  var isCalled = false
  return function(...args){
      if (isCalled) {
          return undefined
      }
      isCalled = true
      const value = fn(...args)
      return value
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
