//the each element is checked for open paranthisis
//if yes then push to stack
//if the element is closing  check for the value is same as in map
//if value is same then just pop();
//for others just return false
//if the stack is empty at the end return true
function validParanthisis(s) {
    let par = s.split('');
    let map = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    // console.log(par, map["{"]);
    let openBraces = ["(", "{", "["];
    let stack = [];
    for (let i = 0; i < par.length; i++) {
        if (openBraces.includes(par[i])) {
            stack.push(par[i])
        }
        else if (map[par[i]] === stack[stack.length - 1]) {
            stack.pop()
        }
        else return false;
    }
    // if (stack.length === 0) {
    //     return true;
    // }
    // else return false;
    return stack.length === 0
}
const paran = "[]()[{()}]{}";
const ans = validParanthisis(paran);
console.log(ans);
