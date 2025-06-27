//count the digit in a number with corner cases
function countDigit(num) {
    if (num == 0) {
        return 1
    }
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10)
        count++
    }
    return count
}

const num = 124212;
const ans = countDigit(num);
console.log(ans);
