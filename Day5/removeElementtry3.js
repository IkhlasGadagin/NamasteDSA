function removeElement(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            x = x + 1;
            if (arr[x] != val) {
                arr[i] = arr[x];
            }
        }
    }
    return arr;
}

const array = [0, 1, 2, 2, 3, 0, 4, 2]
const value = 2;
const ans = removeElement(array, value)
console.log(ans)