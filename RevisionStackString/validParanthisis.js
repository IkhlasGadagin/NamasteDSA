//the stack is used to solve this 
//opening can go inside colse with the matching map
function checkValid(para) {
    let stack = [];
    let open = ['{', '[', '('];
    let map = {
        "}": "{",
        ")": "(",
        ']': '['
    }
    for (let i = 0; i < para.length; i++) {
        if (open.includes(para[i])) {
            stack.push(para[i]);
        }
        else if (stack[stack.length - 1] === map[para[i]]) {
            stack.pop();
        }
        else return false;
    }

    if (stack.length === 0) {
        return true;
    }
    else false
}
const paranthisis = "(()()[]([]){})"
const ans = checkValid(paranthisis);
console.log(ans);
