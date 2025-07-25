//"count the length of the last word Ignore spaces"

function singleFlowWordCount(s) {
    let strlength = s.length - 1;
    let count = 0;
    for (let i = strlength; i >= 0; i--) {

        if (s[i] !== ' ') {
            ++count;
        }
        else if (count > 0) {
            break;
        }

    }
    return count;
}

const str = "   MY name is IkhlasGadagin";
const ans = singleFlowWordCount(str);
console.log(ans);
