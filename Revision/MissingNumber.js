//the array is give sort allthe numbers
//print in 
//loop next number is must +1 of the prev number
//else return the number
// function Missing(arr) {
//     arr.sort();
//     console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] !== (arr[i] + 1)) {
//             return arr[i] + 1;
//         }
//     }

// }
//missing number by math formula
function Missing(arr) {
    let num = arr.length;
    let total = (num * (num + 1)) / 2;

    let sum_of_array = 0
    for (let i = 0; i < arr.length; i++) {
        sum_of_array = sum_of_array + arr[i]
    }
    console.log(total - sum_of_array);



}
const arr = [1, 9, 7, 6, 5, 4, 2, 3, 0];
const ans = Missing(arr);
console.log(ans);
