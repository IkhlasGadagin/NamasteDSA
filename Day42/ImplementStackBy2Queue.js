//the key words are this key word 2 array that represents the array of the q1 and q2
//the q1 is the primary queue
//while pop take all the elements of the q1 by shifting and push to the q2]
// is done by the forlloop traversal upto n-1
// the remaining value is stored and pushed to q2 //
//exchange the refrencr of the q2 to q1 by swapping
var MyStack = function () {
    this.q1 = []
    this.q2 = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let l = this.q1.length;
    for (let i = 0; i < l - 1; i++) {
        let ele = this.q1.swift();
        this.q2.push(ele);
    }
    let popedvalue = this.q1.swift()

    //swap
    let temp = this.q1;
    this.q1 = this.q2;
    q2 = temp;
    return popedvalue;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let l = q1.length;
    for (let i = 0; i < l - 1; i++) {
        this.q2.push(this.q1.swift());
    }
    let topvalue = this.q1[0];
    this.q2.push(topvalue);
    return topvalue;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    if (this.q1.length === 0) {
        return true;
    }
    else return false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */