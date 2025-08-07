//the Algorithm is 
//while pushing at first time whn length is 0 that the [value, value]
//when greater than 0 means and check min by take top element 
//and the min value which is greter that pushed [value, max]
//peek is same  
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.stack.push([val, val])
    }
    else {
        // let min = this.stack[length - 1][1];
        // this.stack.push(Math.max(val, min))
        let min = Math.min(val, this.stack[this.stack.length - 1][1])
        this.stack.push([val, min]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let topValue = this.stack[this.stack.length - 1][0]
    return topValue;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let minValue = this.stack[this.stack.length - 1][1];
    return minValue;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */