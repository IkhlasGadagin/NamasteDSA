function cornerZero(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[x] = arr[i];
            x++;
        }
    }
    console.log(x);
    while (x > 0 && x < arr.length) {
        arr[x] = 0;
        x++
    }
    // for (let i = x; i < arr.length; i++) {
    //     arr[i] = 0;
    // }
    return arr;
}
const arr = [0, 1, 0, 3, 12]
const ans = cornerZero(arr);
console.log(ans);