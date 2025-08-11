/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let ans = [];
    let n = temperatures.length;
    stack.push(temperatures[n - 1]);
    ans.push(0);

    for (let i = n - 2; i >= 0; i++) {
        if (temperatures[i] > stack[stack.length - 1]) {
            ans.unshift(0)
        }
        else {
            while (stack.length) {
                let top = stack.length - 1;
                if (stack[top] < temperatures[i]) {
                    stack.pop();
                }
                else {
                    let days = temperatures.indexOf(stack[top]) - temperatures.indexOf(temperatures[i]);
                    ans.unshift(days);
                }
            }
            if (stack.length === 0) {
                ans.push(0)
            }
        }
        stack.push(temperatures[i])
    }

};