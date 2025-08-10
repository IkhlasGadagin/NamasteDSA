//the Valid Palindrome
// the last and the first must be the same
//parally 
//ignore the special charactes
//Algorithm is Two pointer start and the eng
//while i less than j
//take the element if the special exist +1 iponter
//take the element if the special exist -1 jponter
//if elseif elseif else
function ValidPalindrome(str) {
    let s = str.toLowerCase();
    console.log(s);
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        }
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }
        else if (s[i] === s[j]) {
            ++i;
            --j;
        }
        else return false;
    }
    return true;
}

const str = "@$#gadag#"
const ans = ValidPalindrome(str);
console.log(ans);



