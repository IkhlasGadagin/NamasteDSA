function sumEven(n) {
    if (n == 0) return 0;
    if (arr[n] % 2 == 0) {
        return arr[n] + sumEven(n - 1)
    }
    else {
        return sumEven(n - 1);
    }
}

const arr = [10, 2, 3, 4, 5, 4, 5, 3, 7, 10, 8, 5, 11];
const ans = sumEven(arr.length - 1);
console.log(ans);
