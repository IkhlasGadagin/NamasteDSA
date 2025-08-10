function Prefix(str) {
    let x = 0;
    let firstElement = str[0];
    while (x < str[0].length - 1) {
        let char = str[0][x];
        for (let i = 1; i < str.length; i++) {
            if (char != str[i][x] || x > str[i].length - 1) {
                return str[0].substring(0, x);
            }

        }
        x++;
    }
    return firstElement;
}
let str = ["fliwer", "fliw", "flight"];
const ans = Prefix(str);
console.log(ans);
