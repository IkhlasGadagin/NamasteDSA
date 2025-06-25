//Find the second largest in the array
function secondLargest(arr) {
    let largest = -Infinity
    let secondLargestlargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargestlargest = largest
            largest = arr[i];

        }
        else if (arr[i] > secondLargestlargest) {
            secondLargestlargest = arr[i]

        }
    }
    return secondLargestlargest
}
const arr = [5, 4, 2, 56, 4, 3, 2, 55, 77, 90]
const ans = secondLargest(arr)
console.log(ans);
