//the logic is that maintain the level
// stack create , push ( and assight the level that is length;
//if the closing ) appears just pop
// 

function RemoveOuterParanthisis(s) {
    s.split('')
    let stack = [];
    // let level = 0;
    let ans = "";
    for (let i = 0; i < s.length; s++) {
        if (s[i] === '(') {
            stack.push(s[i])
            // ++level
        }
        else {
            if (stack.length - 1 > 1) {
                ans = ans + s[i] + stack[length - 1];
            }
            stack.pop();
        }
    }
    return ans;

}
const p = '()()(((()))(())';
const ans = RemoveOuterParanthisis(p);
console.log(ans);
