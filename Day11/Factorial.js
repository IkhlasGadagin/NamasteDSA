//factorial of 5
function factorialNum(num) {
    if (num == 1) return 1
    return num * factorialNum(num - 1)

}
const num = 5;
const ans = factorialNum(num);
console.log(ans);
