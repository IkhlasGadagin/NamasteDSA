// the Algorithm is that 
//iterate all over the elements
//push the elements until math operion exist
//when not includes then push the numbers
//if the opration came then pop twice and 
// make operation store in the main variable 
//then push 
// if 

function ReversePolish(str) {
    let operation = ['+', '-', '*', '/'];
    let stack = [];
    // let finalAns =0;
    for (let i = 0; i < str.length; i++) {
        if (!operation.includes(str[i])) {
            stack.push(str[i]);
        }
        else {
            let fir = stack.pop();
            let sec = stack.pop();
            let ans = Math.floor((sec)(str[i])(fir));
            // finalAns = finalAns+ans
            stack.push(ans)
            if (stack.length === 1) {
                return stack.pop();
            }
        }
    }
    // return finalAns;

}
const string = ["4", "13", "5", "/", "+"];
const ans = ReversePolish(string);
console.log(ans);
