function makeGood(s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        const prev= stack[stack.length-1]
        const cur=s[i]

        if(prev && prev!==cur && prev.toUpperCase()==cur.toUpperCase()){
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
};