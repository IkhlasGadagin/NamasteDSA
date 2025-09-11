//the string is palindrome
//with the pointer
//if else if else while
//valid
function validPalindrome(str) {
    let s = str.split('');
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (!s[l].match(/[a-z0-9]/i)) {
            ++l;
        }
        else if (!s[r].match(/[a-z0-9]/i)) {
            --r;
        }
        else if (s[l] === s[r]) {
            ++l;
            --r;

        }
        else return false
    }
    return true;
}
const str = "gadag";
const ans = validPalindrome(str);
console.log(ans);
