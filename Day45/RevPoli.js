// /**
//  * @param {string[]} tokens
//  * @return {number}
//  */
// var evalRPN = function (str) {
//     let operation = ['+', '-', '*', '/'];
//     let stack = [];
//     // let finalAns =0;
//     for (let i = 0; i < str.length; i++) {
//         if (!operation.includes(str[i])) {
//             stack.push(str[i]);
//         }
//         else {
//             let fir = stack.pop();
//             let sec = stack.pop();
//             let ans;

//             switch (str[i]) {
//                 case '+':
//                     ans = sec + fir;
//                     break;
//                 case '-':
//                     ans = sec - fir;
//                     break;
//                 case '*':
//                     ans = sec * fir;
//                     break;
//                 case '/':
//                     ans = Math.trunc(sec / fir);
//                     break;

//             }
//             // finalAns = finalAns+ans
//             stack.push(ans);
//         }
//     }
//     return Number(stack.pop())
//     // return finalAns;
// };

// const string = ["4", "13", "5", "/", "+"];
// const ans = evalRPN(string);
// console.log(ans);

var evalRPN = function (tokens) {
    let operation = ['+', '-', '*', '/'];
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (!operation.includes(tokens[i])) {
            stack.push(tokens[i]);
        }
        else {
            let fir = Number(stack.pop());
            let sec = Number(stack.pop());
            let ans;
            switch (tokens[i]) {
                case '+': ans = sec + fir; break;
                case '-': ans = sec - fir; break;
                case '*': ans = sec * fir; break;
                case '/': ans = Math.trunc(sec / fir); break;
            }
            stack.push(ans);
        }
    }
    return stack.pop();
};

const string = ["4", "13", "5", "/", "+"];
const ans = evalRPN(string);
console.log(ans);