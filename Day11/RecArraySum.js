
function SumofElements(n) {
    if (n == 0) return arr[0];
    return arr[n] + SumofElements(n - 1);
}
const arr = [3, 4, 3, 2, 6, 3, 4, 9];
const ans = SumofElements(arr.length - 1);
console.log(ans);
