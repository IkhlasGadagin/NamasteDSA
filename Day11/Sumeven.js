function sumEven(n) {
    let isEven = arr[n] % 2 == 0;
    if (n == 0) {
        return isEven ? arr[n] : 0
    }
    if (isEven) {
        return arr[n] + sumEven(n - 1)
    }
    else {
        return sumEven(n - 1);
    }
}

const arr = [2, 4, 6, 3, 3, 5, 3, 3, 2, 2, 4, 5];  //20
const ans = sumEven(arr.length - 1);
console.log(ans);