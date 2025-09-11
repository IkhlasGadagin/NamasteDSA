function ValidParanthisis(para) {
    let map = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    let open = ['(', '{', '['];
    let stack = [];
    for (let i = 0; i < para.length; i++) {
        if (open.includes(para[i])) {
            stack.push(para[i])
        }
        else {
            let top = stack[stack.length - 1];
            if (top === map[para[i]]) {
                stack.pop();
            }

        }
    }
    if (stack.length === 0) {
        return true
    }
    else return false;

}
const para = "[[]](()){}";
const ans = ValidParanthisis(para);
console.log(ans);
