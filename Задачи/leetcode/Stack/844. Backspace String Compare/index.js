/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack_s = []
    const stack_t = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            stack_s.pop()
        } else {
            stack_s.push(s[i])
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            stack_t.pop()
        } else {
            stack_t.push(t[i])
        }
    }

    if (stack_s.length !== stack_t.length) {
        return false
    }

    for (let i = 0; i < stack_s.length; i++) {
        if (stack_s[i] !== stack_t[i]) {
            return false
        }
    }

    return true
};