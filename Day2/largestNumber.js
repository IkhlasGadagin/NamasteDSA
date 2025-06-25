//the function to largest in the array
function Largest(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
const array = [5, 56, 77, 9, 34, 22, 11, 55]
console.log(Largest(array));
