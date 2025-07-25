function lastWordLegth(s) {
    stringLength = s.length - 1;
    console.log(stringLength);
    while (stringLength >= 0) {
        if (s[stringLength] !== " ") {
            break;
        }
        --stringLength;
    }
    let count = 0;
    while (stringLength > 0) {
        if (s[stringLength] === " ") {
            break;
        }

        ++count;
        --stringLength

    }
    return count;
}
let s = " i javascript coding is an Art   "
let ans = lastWordLegth(s);
console.log(ans);
