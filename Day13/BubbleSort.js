/* the bubble sort involves two loop i ans j with the same referesnce
   the first iteration gives the last element correct 
   the second give the second bigger element at the last second position
   so iterate only -i
   swap
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let isSwapped = false;
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                isSwapped = true
            }
            if (!isSwapped) break;
        }
    }
    return arr;
}

//if (arr[j] > arr[j + 1])  or arr[j+1]<arr[j]

const array = [4, 5, 3, 2, 5, 3, 6, 34, 2];
const ans = bubbleSort(array);
console.log(ans);
