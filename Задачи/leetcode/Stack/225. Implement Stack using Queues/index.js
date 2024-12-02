
var MyStack = function() {
    this.queue_1 = []
    this.queue_2 = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    while (!!this.queue_1.length) {
        this.queue_2.push(this.queue_1.shift())
    }

    this.queue_1.push(x)

    while(!!this.queue_2.length) {
        this.queue_1.push(this.queue_2.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue_1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue_1[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue_1.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */