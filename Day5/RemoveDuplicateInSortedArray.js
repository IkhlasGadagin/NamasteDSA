//remove the duplicate element in an array and keep the same size of the original array
//[ 0 0 0 0 1 2  3 4 4 5 5 6 6 6 7 7 8 9]
//[0 1 2 3 4 5 6 7 8 9 0 4 5 6 6 7 7 8 9] return the digit 
function removeDup(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x = x + 1;
            arr[x] = arr[i]
        }
    }
    return x + 1;

}

const array = [0, 0, 0, 0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 9]
const ans = removeDup(array)
console.log(ans);


