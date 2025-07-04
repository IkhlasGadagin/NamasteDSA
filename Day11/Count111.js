let count = 0;
function countOne(n) {
    if (n == 0) return 0;

    if (arr[n] === 1) {
        return count + 1 + countOne(n - 1);

    }
    else return countOne(n - 1);

}

const arr = [0, 1, 1, 4, 3, 1, 1, 1, 1, 1, 9];
const ans = countOne(arr.length - 1);
console.log(ans);
