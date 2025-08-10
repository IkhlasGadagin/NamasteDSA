//write a code Valid Parenthesis if the paranthisis is in valid 
//return false please
// Algorithm the opening paranthis is pushed
//else poped for the for the matching in the map
//else false /
//if stack is empty then then true
function ValidParanthisis(para) {
    let map = {
        ")": "(",
        "}": "{",
        "]": "[",
    }
    let stack = [];
    let openBrackets = ['(', '[', '{'];
    for (let i = 0; i < para.length; i++) {
        if (openBrackets.includes(para[i])) {
            stack.push(para[i]);
        }
        else if (map[para[i]] === stack[stack.length - 1]) {
            stack.pop();
        }
        else return false;
    }
    return stack.length === 0;
}
const paranthisis = "()()(){[(())]}[([[()]])]()";
const ans = ValidParanthisis(paranthisis);
console.log(ans);