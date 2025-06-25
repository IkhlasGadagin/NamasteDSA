//Find the second largest in the array
function secondLargest(arr) {
    if (arr.length < 2) {
        return null
    }
    let largest = -Infinity
    let secondLargestlargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargestlargest = largest
            largest = arr[i];

        }
        else if (arr[i] > secondLargestlargest && arr[i] != largest) {
            secondLargestlargest = arr[i]

        }
    }
    return secondLargestlargest
}
const arr = [5, 4, 2, 56, 4, 3, 2, 55, 77, 90, 90, 20, 20, 20, 20]
// const arr = [5]
const ans = secondLargest(arr)
console.log(ans);
