function MissingNum(arr) {
    const n = arr.length;
    const grandSum = n * (n + 1) / 2
    // console.log(grandSum);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return grandSum - sum

}
const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1]
const ans = MissingNum(arr);
console.log(ans);
