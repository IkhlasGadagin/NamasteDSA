
var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.s2.length === 0) {
        let l = this.s1.length;
        for (let i = 0; i < l; i++) {
            this.s2.push(this.s1.pop())
        }
        let popedValue = this.s2.pop();
        return popedValue;
    }
    else if (this.s2.length > 0) {
        let popedValue = this.s2.pop();
        return popedValue;
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.s2.length === 0) {
        let l = this.s1.length;
        for (let i = 0; i < l; i++) {
            this.s2.push(this.s1.pop())
        }
        let peekValue = this.s2[this.s2.length - 1];
        return peekValue;
    }
    else if (this.s2.length > 0) {
        let peekValue = this.s2[this.s2.length - 1];
        return peekValue;
    }

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {

};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */