/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for (let char of s) {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char)
        } else {
            if (stack.pop() !== map[char]) {
                return false
            }
        }
    }

    return stack.length === 0
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid2 = function(s) {
    const stack = []
    const map = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    // if (s.length < 2) {
    //     return false
    // }
    for (let char of s) {
        if (['{', '[', '('].includes(char)) {
            stack.push(map[char])
        }
        else {
            // const last = stack.pop()
            // if (!last) {
            //     return false
            // }
            // if (last === map[char]) {
            //     return true
            // } else if (last !== char) {
            //     return false
            // }

            if (stack.pop() !== char) {
                return false
            }
        }
    }

    return !stack.length
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid3 = function(s) {
    let stack = []
    const map = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(map[s[i]])
        } else {
            const last = stack.pop()
            if (last !== s[i]) {
                return false
            }
        }
    }

    return stack.length === 0
};