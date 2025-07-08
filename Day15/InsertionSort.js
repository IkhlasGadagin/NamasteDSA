function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prev = i - 1;

        while (arr[prev] > curr) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;

    }
    return arr;
}
const arr = [3, 4, 56, 3, 4, 9, 4, 2, 4, 6, -4, -8, 0];
const ans = insertionSort(arr);
console.log(ans);
