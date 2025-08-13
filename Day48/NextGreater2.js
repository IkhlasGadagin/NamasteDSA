// // The Second Greater elemnt nothing the 
// // next Greater element check also from the backword
// //The Algorithm is that  create double length array and fill with 0 
// //by spread 
// //take the last element and push to stack
// //for loop starts from the last second >=0 i--
// //if the cur is greater that the top start popping
// //else  top element to the filled zero array 
// //if the length is zero then -1
// //return ans array
function SecondLargest2(arr) {
    let n = arr.length;
    let doubleArray = [...arr, ...arr]
    let m = doubleArray.length;

    console.log('doubleArray', doubleArray, m);
    let ans = Array(m).fill(0);
    console.log(ans);

    // let lastElement = arr[n - 1];
    let stack = [];
    stack.push(doubleArray[m - 1]);
    console.log(stack);

    for (let i = m - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (doubleArray[i] >= top) {
                stack.pop();
            }//fount the greater
            else {
                ans[i] = top;
                break;
            }
        }
        if (stack.length === 0) {
            ans[i] = -1;
        }
        stack.push(doubleArray[i]);
    }
    return ans.slice(0, m / 2)

}
const arr = [2, 3, 4, 5, 8, 9, 20, 10, 17, 19];
const ans = SecondLargest2(arr);
console.log(ans);


