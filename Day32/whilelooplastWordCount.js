function whilelooplastWordCount(s) {
    let slength = s.length - 1;
    let count = 0;

    while (slength >= 0) {
        if (s[slength] != " ") {
            count++;
        }
        else if (count > 0) {
            break;
        }
        --slength;
    }
    return count;
}
const str = "the string problem    "
const ans = whilelooplastWordCount(str);
console.log(ans);
