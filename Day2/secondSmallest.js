//the function to find the second smallest in the array 

// Write a program to find the second largest in an array
function secondSmallest(arr) {
    let smallest = +Infinity;
    let secondSmallest = +Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        }
        else if (arr[i] < secondSmallest) {
            secondSmallest = arr[i]

        }
    }
    return secondSmallest;

}
const array = [5, 3, 9, 6, 54, 44, 22, 33, 66, 87, 45]
const result = secondSmallest(array)
console.log(result)