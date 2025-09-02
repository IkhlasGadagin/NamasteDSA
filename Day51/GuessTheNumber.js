function Guess(n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let res = guess(mid);
        if (res === 0) return mid;
        else if (res === -1) {
            r = mid - 1;
        }
        else {

            l = mid + 1;
        }
    }
}

function guess(num) {
    if (num === 56) return 0;
    else if (num > 56) return -1
    else return 1
}
const num = 56;
const ans = Guess(num);
console.log(ans);
