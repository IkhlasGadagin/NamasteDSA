function removeElement(arr, elem) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            arr[i] = arr[x + 1];
        }
    }
    return arr;
}

const arr = [4, 5, 9, 11, 9, 7]
const element = 9;
const ans = removeElement(arr, element);
console.log(ans);
