//Remove the outer most paranthisis
//the stack is implemented ()((()))  and (())
//Algorithm is that if the opening parameter is came then pust
//to stack take the helper variable to store the variable
//the split the string to iterate
//the length is more then then appent to the varieble 
//else for the closing appen when the length is more than 1

function RemoveOuter(para) {
    let st = para.split('');
    let stack = [];
    let ans = ""
    for (let i = 0; i < st.length; i++) {
        if (st[i] === '(') {
            stack.push(st[i]);
            if (stack.length > 1) {
                ans = ans + st[i];
            }
        }//for closing braces
        else {
            if (stack.length > 1) {
                ans = ans + st[i];
            }
            stack.pop();
        }

    }
    return ans;
}
let para = "()((()))(())";
let ans = RemoveOuter(para);
console.log(ans);


