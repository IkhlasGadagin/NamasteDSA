//the varible to maintain min 
// while push update the min
//
var MinStack = function () {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

    if (this.val < this.stack[this.stack.length - 1]) {
        this.min = this.val;
    }
    else if (this.stack.length === 0) {
        this.min = this.val
        this.stack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let poppedValue = this.stack.pop();
    return poppedValue;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let topValue = this.stack[this.length - 1];
    return topValue;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */