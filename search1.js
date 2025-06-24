
function findElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const ans = findElement(arr, target);
console.log(ans);
