function nextLargest(num, arr) {
    let map = {};
    let stack = [];
    let n = arr.length;
    // let lastelement = arr[arr.length - 1];
    stack.push(arr[n - 1]);
    // map[arr[arr.length - 1]] = -1;
    map[arr[n - 1]] = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < stack[stack.length - 1]) {
            map[arr[i]] = stack[stack.length - 1];
        }
        else {
            while (stack.length) {
                if (stack[stack.length - 1] < arr[i]) {
                    stack.pop();
                }
                else {
                    map[arr[i]] = stack[stack.length - 1];
                    break;
                }

            }
            if (stack.length === 0) {
                map[arr[i]] = -1;
            }
        }
        stack.push(arr[i])
    }
    let ans = num.map((ele) => map[ele]);
    console.log(ans);
    // let ans = [];
    // for (let i = 0; i < num.length; i++) {
    //     ans.push(map[num[i]]);
    // }
    return ans;

}
const arr = [2, 5, 7];
const arr2 = [2, 4, 5, 1, 7]
const ans = nextLargest(arr, arr2);
console.log(ans);
