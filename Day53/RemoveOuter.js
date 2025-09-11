
/* 
the algo is that take count and if open then cont increase 
if count is greter that 1 
else decrease the count for the close one
*/
function RemoveOuter(s) {

    let count = 0;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++;
            if (count > 1) {
                ans = ans + s[i]
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

const str = "((()))";
const ans = RemoveOuter(str);
console.log(ans);
