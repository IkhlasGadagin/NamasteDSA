/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/* 
 the daily temperature require the stack to solve because 
 the  next bigger to find so stack is implemented
 Algorithm
 #create stack, and array, push the last index to stack
 the ans array has same length  of the temps and filled with 0
 the for loop starts from length-2 and sloud decrease
 push all the index to stack 
 while stack length exist
 if the if the current is greater that top start poping until
 bigger find take the diff of the indices of the cur and the top elemnt
 put the ans in the ans array directly
 if not fount in the stack 
 assign to zero
 */
var dailyTemperatures = function (temp) {
    let stack = [];
    let n = temp.length;
    let ans = Array(n).fill(0);
    ans[n - 1] = 0;
    stack.push(temp.length - 1);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (temp[i] > temp[top]) {
                stack.pop();
            }
            else {
                ans[i] = top - i;
                break;
            }
        }
        if (stack.length === 0) {
            ans[i] = 0;
        }
        stack.push(i);
    }
    return ans;

};