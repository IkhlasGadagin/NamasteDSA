/* 
the peak element is the element which is
bigger that the neighbour element 
solved by the binery search 
0 to last element 
the while loop 
less than l with r
the mid 
the mid and the next element is bigger then 
the next element is the ans
else 
move right to the mid
at last  coinside l ans r
*/
function Peak(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] < arr[mid + 1]) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return r;
}
let arr = [1, 2, 1, 3, 5, 6, 4]
let ans = Peak(arr);
console.log(ans);
