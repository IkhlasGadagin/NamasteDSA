function palindrom(num) {
    if (num < 0) return false;
    let copy = num;
    let rev = 0;
    while (num > 0) {
        let remainder = num % 10
        rev = (10 * rev) + remainder;
        num = Math.floor(num / 10);
    }
    if (rev === copy) {
        return true
    }
    else {
        return false
    }
}

const number = -124441;
const ans = palindrom(number)
console.log(ans);

