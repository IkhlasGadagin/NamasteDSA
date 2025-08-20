function Bigsmall(arr) {
    let small = arr[0];
    let big = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
        }
        if (arr[i] > big) {
            big = arr[i];
        }
    }
    return big - small;
}
const arr = [2, 3, 2, 34, 2, 2, 1, 99];
const ans = Bigsmall(arr);
console.log(ans);
