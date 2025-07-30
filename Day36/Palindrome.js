//check if string is palindeome  for the special case 
//increase the space complexcity
// pointer approach

function palinDrome(s) {
    let str = s.toLowerCase();
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (!str[i].match(/[a-z0-9]/i)) {
            ++i;
        }
        else if (!str[j].match(/[a-z0-9]/i)) {
            --j;
        }
        else if (str[i] === str[j]) {
            ++i;
            --j;
        }
        else return false;
    }
    return true;
}

const str = "A man, aa plan, a canal: Panama"
let ans = palinDrome(str);
console.log(ans);
