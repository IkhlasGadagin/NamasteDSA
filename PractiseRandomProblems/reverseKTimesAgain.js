//the question is that reverse K times
//if the element is 3 k
//reverse the k/2 as mid and swap
function Reverse(arr, k) {
    for (let i = 0; i < arr.length; i = i + 2 * k) {
        let mid = Math.floor(k / 2)
        for (let j = 0; j < mid; j++) {
            let temp = arr[i + j];
            arr[i + j] = arr[i + k - j - 1];
            arr[i + k - j - 1] = temp;
        }
    }
    return arr;
}
const arr = [2, 3, 4, 2, 4, 76, 5, 3, 4, 5, 3];
const k = 3;
const ans = Reverse(arr, k);
console.log(ans);
