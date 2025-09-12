//the Program to revise the Bonary search
//the square number start from 2 to ends for its half number
//while 
//to understend understand the question it mekaes life easy
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


function Search(arr, target) {
    let l = 0;
    let r = arr.length;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) return mid;
        if (arr[l] < arr[mid]) {
            if (target >= arr[l] && target < arr[mid]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else {
            if (target <= arr[r] && target > arr[mid]) {
                l = mid + 1
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}
const arr = [5, 6, 7, 0, 1, 2, 3, 4];
const target = 0;
const answer = Search(arr, target);
console.log(answer);
