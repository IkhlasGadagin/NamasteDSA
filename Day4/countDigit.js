//count the digit in a number with corner cases
function countDigit(num) {
    if (num == 0) {
        return 1
    }
    num = Math.abs(num);
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10)
        count++
    }
    return count
}

const num = -10;
const ans = countDigit(num);
console.log(ans);
