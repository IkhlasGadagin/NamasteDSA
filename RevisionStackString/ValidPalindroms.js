//check valid palindrome only for the num and alpha
function Check(arr) {
    arr = arr.toLowerCase();
    let p1 = 0;
    let p2 = arr.length - 1;
    while (p1 < p2) {
        if (!arr[p1].match(/[a-z0-9]/i)) {
            ++p1;
        }
        else if (!arr[p2].match(/[a-z0-9]/i)) {
            --p2;
        }
        else if (arr[p1] === arr[p2]) {
            ++p1;
            --p2;
        }
        else return false;
    }
    return true;
}
const arr = "@$Gag@a*^g"
const ans = Check(arr);
console.log(ans);
