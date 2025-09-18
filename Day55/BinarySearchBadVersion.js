/* 
the best version is that 
binary seacrch 
left right mid and while loop

*/
function Version(n) {
    let l = 1;
    let r = n;
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        if (!isBadVersion(mid)) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return r;
}
const num = 15;
const ans = Version(num);
console.log(ans);
