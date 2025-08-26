function cornerZero(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[x] = arr[i];
            x++;
        }
    }
    for (let i = x; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
const arr = [3, 2, 42, 6, 0, 5, 7, 0, 4, 5, 0, 6];
const ans = cornerZero(arr);
console.log(ans);
