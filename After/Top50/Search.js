function Search(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 4, 5, 1, 6, 2, 5, 7];
const find = 0;
const ans = Search(arr, find);
console.log(ans);

