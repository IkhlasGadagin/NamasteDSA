//the Program to revise the Bonary search
//the square number start from 2 to ends for its half number
//while 
//
function Square(num) {
    if (num < 2) return num;

    let left = 2;
    let right = Math.floor(num / 2);
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === num) {
            return mid;
        }
        else if (mid * mid > num) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return right

}
const num = 72;
const ans = Square(num);
console.log(ans);
