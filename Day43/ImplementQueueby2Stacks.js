
var MyQueue = function () {
    this.s1 = []; //previledge
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
    //length minus one
    let l = this.s1.length;
    //length - 1 times push to second stack
    for (let i = 0; i < l - 1; i++) {
        this.s2.push(this.s1.pop())
    }
    let popedValue = this.s1.pop();

    for (let j = 0; j < this.s2.length; j++) {
        this.s1.push(this.s2.pop());
    }
    return popedValue;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let l = this.s1.length;
    for (let i = 0; i < l - 1; i++) {
        this.s2.push(this.s1.pop());

    }
    let peekValue = this.s1[this.s1.length - 1];
    this.s2.push(peekValue);

    for (let j = 0; j < this.s2.length; j++) {
        this.s1.push(this.s2.pop());
    }
    return peekValue;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */