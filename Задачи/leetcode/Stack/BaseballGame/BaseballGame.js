/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = []
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'C') {
            stack.pop()
        } else if (operations[i] === 'D') {
            stack.push(Number(stack[stack.length-1]) * 2)

        } else if (operations[i] === '+') {
            stack.push(Number(stack[stack.length - 2]) + Number(stack[stack.length - 1]))

        } else {
            stack.push(Number(operations[i]))
        }
    }
    return stack.reduce((acc, item) => acc + item, 0)
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))