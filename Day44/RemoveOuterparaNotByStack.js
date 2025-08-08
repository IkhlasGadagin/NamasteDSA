//understand the problem that for '(' ++count and for ')' --count
// to ignore start add sting when count becomes more that 1
// for else ")" decrease and add to the string 
// return the ans sting added
function RemoveOuterparaNotByStack(s) {
    let count = 0;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ++count;
            if (count > 1) {
                ans = ans + s[i];
            }
        }
        else {
            if (count > 1) {
                ans = ans + s[i];
            }
            --count;
        }
    }
    return ans;

}
const brackets = "((()))((()))()";
const ans = RemoveOuterparaNotByStack(brackets);
console.log(ans);
