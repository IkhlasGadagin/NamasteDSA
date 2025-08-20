function Reveses(str) {
    let len = str.length;
    let min = Math.floor(len / 2);
    for (let i = 0; i < min; i++) {
        let temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
    return str.join('');
}
const str = ['h', 'e', 'l', 'l', 'o'];
const ans = Reveses(str);
console.log(ans);
