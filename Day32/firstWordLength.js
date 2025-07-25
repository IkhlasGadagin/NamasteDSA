function firstWordCount(s) {
    let num = 0;
    console.log(s.length);

    while (num < s.length - 1) {
        if (s[num] === " ") {
            num++
        }
        else break
    }

    let count = 0;

    while (num < s.length - 1) {
        if (s[num] !== " ") {
            ++count;
            ++num;
        }
        else {
            break;
        }
    }
    return count;
}
const s = "     mine name is Khan";
const ans = firstWordCount(s);
console.log(ans);
