// the next greater of each element 
////the greater may be anywhare after the element or -1
//to know whick is the next  push each element into stack
//start for loop from the  last second
//array fill with 0;

function nextGreater(arr) {
    let len = arr.length;
    let ans = Array(len).fill(0);
    let stack = [];
    let map = {};
    let n = arr.length;
    let lastElement = arr[n - 1];
    map[lastElement] = 0;
    stack.push(lastElement);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > arr[i]) {
                map[arr[i]] = top;
                break;
            }
            else {
                stack.pop();
            }
            if (stack.length === 0) {
                map[arr[i]] = -1
            }
        }
        stack.push(arr[i])
    }
    return map;



}
const arr = [10, 40, 20, 50, 80, 66, 44, 3];
const ans = nextGreater(arr);
console.log(ans);
