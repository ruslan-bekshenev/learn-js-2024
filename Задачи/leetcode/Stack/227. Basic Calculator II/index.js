/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num = ''
    let operator = '+'
    const stack = []

    if (!isNaN(s)) {
        return Number(s)
    }

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) num += s[i];

        if (isNaN(s[i]) || i === s.length - 1) {
            if (operator === '+') {
                stack.push(+num)
            }
            if (operator === '-') {
                stack.push(-num)
            }
            if (operator === '*') {
                stack.push(stack.pop() * +num)
            }
            if (operator === '/') {
                stack.push(Math.trunc(+stack.pop() / +num))
            }

            operator = s[i]
            num = ''
        }
    }

    return stack.reduce((acc, item) => acc + Number(item), 0)
};