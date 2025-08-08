// the Algorithm is that 
//iterate all over the elements
//push the elements until math operion exist
//when not includes then push the numbers
//if the opration came then pop twice and 
//eval and them push to stack
//then push 


function ReversePolish(str) {
    let operation = ['+', '-', '*', '/'];
    let stack = [];
    // let finalAns =0;
    for (let i = 0; i < str.length; i++) {
        if (!operation.includes(str[i])) {
            stack.push(str[i]);
        }
        else {
            let fir = Number(stack.pop());
            let sec = Number(stack.pop());

            let ans = eval(sec + str[i] + fir)
            stack.push(Math.trunc(ans))
        }
    }
    return Number(stack.pop());

}
const string = ["4", "13", "5", "/", "+"];
const ans = ReversePolish(string);
console.log(ans);
