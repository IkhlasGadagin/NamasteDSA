//to find the next temp index- current index push index
function nextWarm(temp) {
    // let len = temp.length;
    // let array = Array(len).fill(0);
    // let lastelement = len.length - 1;
    // let stack = [];
    // array[len - 1] = 0;
    // stack.push(lastelement);
    let stack = [];
    let n = temp.length;
    let array = Array(n).fill(0);
    array[n - 1] = 0;
    stack.push(temp.length - 1);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (temp[top] >= temp[i]) {
                stack.pop();
            }
            else {
                array[i] = top - i;
                break;
            }

        }
        if (stack.length === 0) {
            array[i] = 0;
        }
        stack.push(i)
    }
    return array;
}
const temp = [73, 74, 75, 71, 69, 72, 76, 73]
const ans = nextWarm(temp);
console.log(ans);
