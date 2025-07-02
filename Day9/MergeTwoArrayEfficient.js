/* the problem statement is that merge the two array ans return the modified array arr1 
a1 =[2 3 4 23  2 34]
a2 =[2 5 5 3 6  2 34]
ans = [2,2,2,2,3,3,4,5,5,6,23,34,34]
the lofic is place the biggest numbers from the last loop until M+N
replace big at the last
handle the corner cases of p1 and p2 pointer
*/

function MergeArray(arr1, m, arr2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && arr1[p1] > arr2[p2]) {
            arr1[i] = arr1[p1];
            p1--
        }
        else {
            arr1[i] = arr2[p2];
            p2--;
        }
    }
    return arr1;
}

// const arr1 = [3, 2, 2, 54, 2, 1, 7, 4];  // const arr2 = [1, 3, 4, 5, 23, 3, 2, 2, 39]
const arr1 = [1, 2, 3];
const arr2 = [2, 5, 6]
const m = arr1.length;
const n = arr2.length;
const ans = MergeArray(arr1, m, arr2, n);
console.log(ans);
