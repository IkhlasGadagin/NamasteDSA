/* the algorithm is that for the perfect square
    for any number the number is between the 2 and the half of it
    The BInary search
    the l is 2 and r is half of the parameter
    the mid is the l+r
    if fount then return the mid
    else greater move mid plus +1 else mid-1
    while l<=r
*/
function Square(num) {
    if (num < 2) return num;

    let l = 2;
    let r = Math.floor(num / 2);
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid * mid === num) {
            return mid
        }
        else if (num < mid * mid) {
            r = mid - 1;
        }
        else {
            l = mid + 1
        }
    }
    return r;
}


const num = 40;
const ans = Square(num);
console.log(ans);
