function NextWarm(temp) {
    let stack = [];
    let n = temp.length;
    let ans = Array(n).fill(0);
    stack.push(n - 1);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1]
            if (temp[i] > temp[top]) {
                stack.pop();
            }
            else {
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i);

    }
    return ans
}

const temp = [67, 65, 68, 70, 80, 77, 76, 75, 88];
const ans = NextWarm(temp);
console.log(ans);
/* [2, 1, 1, 1, 4,3, 2, 1, 0] */
