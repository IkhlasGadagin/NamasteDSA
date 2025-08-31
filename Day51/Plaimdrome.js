//the codeis to revise everything
/* the pointer 
the stack 
while
for loop
while 
loop 
length 
map 
the 
while loop let x  is to iterate and to switch
if else for loop
while loop for loop the let x for the x
increase only when and exchanege only x matters

*/
function NextGreater(arr) {
    let len = arr.length;
    let ans = Array(len).fill(-1);
    let stack = [];
    stack.push(arr[len - 1]);

    for (let i = (2 * len) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > arr[i % len]) {
                ans[i % len] = top;
                break;
            }
            else {
                stack.pop()
            }
        }
        stack.push(arr[i % len])
    }
    return ans.slice(0, len)
}
const arr = [1, 2, 1];     //[2,-1,2]
const ans = NextGreater(arr);
console.log(ans);
