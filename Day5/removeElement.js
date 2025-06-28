function removeElement(arr, ele) {
    let x = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {

            arr[i] = arr[x]
            x = x + 1;
        }
    }
    return arr;
}

const arr = [4, 5, 9, 11, 9, 7, 11, 11, 11, 11, 0];
const element = 11;
const ans = removeElement(arr, element);
console.log(ans);
