
function removeDup(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            x = i;
            if (arr[x + i] != val) {
                arr[i] = arr[x - 1];
            }
        }
    }
    return arr;
}

const array = [0, 1, 2, 2, 3, 0, 4, 2];
const value = 2;
const ans = removeDup(array, value)
console.log(ans);
