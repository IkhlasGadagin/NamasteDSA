function lastWordLegth(s) {
    stringLength = s.length - 1;
    console.log(stringLength);
    while (stringLength >= 0) {
        if (s[stringLength] === " ") {
            --stringLength;
        }
        else {
            break;
        }
    }
    let count = 0;
    while (stringLength > 0) {
        if (s[stringLength] != " ") {
            count++;
            stringLength--;
        }
        else break;
    }
    return count;
}
let s = " i javascript coding   "
let ans = lastWordLegth(s);
console.log(ans);
