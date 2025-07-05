function isPowerOf2(num) {
    if (num == 1) {
        return true
    }
    else if (num < 1 || (num % 2 != 0)) {
        return false
    }
    else {
        return isPowerOf2(num / 2)
    }

}
const num = 193;
const ans = isPowerOf2(num);
console.log(ans);
