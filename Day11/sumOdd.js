function sumOdd(n) {
    let isOdd = arr[n] % 2 != 0;
    if (n == 0) {
        return isOdd ? arr[n] : 0;
    }
    if (isOdd) {
        return arr[n] + sumOdd(n - 1);
    }
    else {
        return sumOdd(n - 1);
    }
}

const arr = [2, 4, 6, 3, 3, 5, 3, 3, 2, 2, 4, 5];  //22
const ans = sumOdd(arr.length - 1);
console.log(ans);
