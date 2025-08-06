function validParanthisis(para) {
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
    if (stack.length === 0) {
        return true;
    }
    else return false;
}
const paran = "[]()[{()}]{}";
const ans = validParanthisis(paran);
console.log(ans);
