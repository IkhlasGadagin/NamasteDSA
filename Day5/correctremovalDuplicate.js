// the function that used to remove the duplicate element in an array 
// the hint as id the element is not present move to x
// if the element found then move forward like i++

function removeElement(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != val) {
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    return arr;
}

const array = [2, 4, 3, 2, 1, 3, 22, 32, 11, 2, 2]
const remove = 3;
const ans = removeElement(array, remove);
console.log(ans);
