function sumOdd(n) {
    if (n == 0) return 1;
    if (arr[n] % 2 == 1) {
        return arr[n] + sumOdd(n - 1);
    }
    else {
        return sumOdd(n - 1);
    }

}

const arr = [1, 2, 3, 4, 5, 4, 5, 3, 7, 8, 5, 11];
const ans = sumOdd(arr.length - 1);
console.log(ans);
