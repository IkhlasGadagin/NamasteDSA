//The Algorithm is that if the number is 
/* 
the current and the next take array 
and fill the -1 to it 
the stack push the last element
start for loop from the last second
while for the stack
take the top ans insert at the index of the ans array
else pop break

*/
function NextGreater(arr) {
    let ans = Array(arr.length).fill(-1);
    let stack = [];
    let lastElement = arr[arr.length - 1];
    stack.push(lastElement);
    let map = {}
    map[lastElement] = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > arr[i]) {
                map[arr[i]] = top;
                break;
            }
            else {
                stack.pop()
            }
            if (stack.length === 0) {
                map[arr[i]] = -1;
            }
        }
        stack.push(arr[i])
    }

    return map;


}
const arr = [1, 4, 5, 3, 6, 8, 11, 5, 3, 52, 89, 9];

const ans = NextGreater(arr);
console.log(ans);

