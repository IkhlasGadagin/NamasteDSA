// to remove the outer paranthesis is done form the stack
// if the open bracket exist then push to stack
//else pop
// if we removing the outer then only length is greater then only add to the string
// if the closing ) is then also added to the ans string with the same element
// return the string

function RemoveOuterpara(s) {
    let stack = [];
    let brackets = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
            if ((stack.length) > 1) {
                brackets = brackets + s[i];
            }

        }
        else {
            if ((stack.length) > 1) {
                brackets = brackets + s[i];
            }
            stack.pop();
        }
    }
    return brackets;
}
const par = "(((())))";
const ans = RemoveOuterpara(par);
console.log(ans);
