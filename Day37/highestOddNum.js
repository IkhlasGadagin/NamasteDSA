function highestOddNum(str) {
    let n = str.length;
    for (let i = n; i >= 0; i--) {
        if (Number(str[i]) % 2 === 1) {
            return str.substring(0, i + 1);
        }
    }
}
const str = "356922222";
const ans = highestOddNum(str);
console.log(ans);
