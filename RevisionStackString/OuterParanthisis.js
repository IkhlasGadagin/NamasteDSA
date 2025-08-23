// remove the couter paranthisis
function OuterParanthisis(para) {
    let s = para.split('');
    let count = 0;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++
            if (count > 1) {
                ans = ans + s[i];
            }
        }
        else {
            if (count > 1) {
                ans = ans + s[i];
            }
            count--;
        }
    }
    return ans;
}
const para = "()()((()))"
const ans = OuterParanthisis(para);
console.log(ans);
