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
        else if (stack.length > 1) {
            let sec = stack.pop();
            let fir = stack.pop();
            let ans;

            switch (str[i]) {
                case '+':
                    ans = sec + fir;
                    break;
                case '-':
                    ans = sec - fir;
                    break;
                case '*':
                    ans = sec * fir;
                    break;
                case '/':
                    ans = Math.trunc(sec / fir);
                    break;

            }
            // finalAns = finalAns+ans
            stack.push(ans)
            let result = stack.pop();
            return Number(result);
            // if (stack.length === 1) {
            //      let result = stack.pop();
            //      return Number(result);
            // }
        }
    }

}
const string = ["4", "13", "5", "/", "+"];
const ans = ReversePolish(string);
console.log(ans);
