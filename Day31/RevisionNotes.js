//the Notes for the Revision Revision Recussively
function SecondLargest(arr) {
    let large = -Infinity;
    let secLarge = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            secLarge = large;
            large = arr[i];
        }
        else if (arr[i] > secLarge && arr[i] != large) {
            secLarge = arr[i];
        }
    }
    return secLarge;
}

const arr = [5, 5, 4, 2, 3, 4, 5, 76, 53, 0];
let and = SecondLargest(arr);
console.log(and);
