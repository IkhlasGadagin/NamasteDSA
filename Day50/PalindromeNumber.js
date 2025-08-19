function Palin(n) {
    let res = 0;
    let original = n;
    while (num > 0) {
        let rem = num % 10;
        res = (res * 10) + rem;
        num = Math.round(num / 10);
    }
    if (original === res) {
        return true
    }
    else return false;
}
let num = 11211;
const ans = Palin(num);
console.log(ans);
