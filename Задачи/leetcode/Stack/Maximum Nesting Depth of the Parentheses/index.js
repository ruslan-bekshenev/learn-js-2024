/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
            count = stack.length > count ? stack.length : count
        } else if (s[i] === ')') {
            stack.pop()
        }
    }

    return count
};