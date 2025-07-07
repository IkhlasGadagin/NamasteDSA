function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                arr[min] = arr[j];

            }
        }
    }
    return arr;
}

const array = [3, 5, 4, 2, 7, 6, 1, 8, 9];
const ans = selectionSort(array);
console.log(ans);
