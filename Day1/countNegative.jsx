// code to write the count of the negagive number in an array 
function Count(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (arr[i] < 0) {
            count++

        }

    }
    return count
}
const arr = [-3, -2, -6, 3, 2]
console.log(Count(arr));

