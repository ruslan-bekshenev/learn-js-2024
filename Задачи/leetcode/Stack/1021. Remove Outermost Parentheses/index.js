/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let a = 0;
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (a > 0) {
                stack.push('(')
            }
            a++
        } else if (s[i] === ')') {
            if (a > 1) {
                stack.push(')')
            }
            a--
        }
    }

    return stack.join('')
};