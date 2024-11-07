/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  console.log(functions)
  return function (x) {
      if (!functions || !functions?.length) {
          return x
      }

      const result = functions.reverse().reduce((acc, fn) => {
          acc = fn(acc)
          return acc
      }, x)

      return result
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/