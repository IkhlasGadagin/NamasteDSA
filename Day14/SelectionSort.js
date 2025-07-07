function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;

            }
        }
        //swap arr[i] = arr[min]
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

    }
    return arr;
}

const array = [3, 5, 4, 2, 7, 6, 1, 8, 9];
const ans = selectionSort(array);
console.log(ans);
