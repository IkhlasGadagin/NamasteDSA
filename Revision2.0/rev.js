// remove the couter paranthisis
function OuterParanthisis(para) {
    let s = para.split('');
    let count = 0;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++
            if (count > 1) {
                ans = ans + s[i];
            }
        }
        else {
            if (count > 1) {
                ans = ans + s[i];
            }
            count--;
        }
    }
    return ans;
}



function Count(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? ++map[arr[i]] : 1
    }
    return map;
}
const str = "jhsdafjhsgdjaf";
const ans = Count(str);
console.log(ans);