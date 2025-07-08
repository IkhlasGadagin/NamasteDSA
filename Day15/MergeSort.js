//Devide and conquere rule bu recursion return the sorted by helper function to the caller
function mergeSort(arr) {

    if (arr.length <= 0) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return sortingHelper(left, right);

}

function sortingHelper(arr1, arr2) {
    let i = 0;
    let j = 0;
    let ans = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i])
            i++
        }
        else {
            ans.push(arr2[j]);
            j++
        }

    }
    return [...ans, ...arr1.slice(i), ...arr2.slice(j)];
}
const array = [3, 4, 5, 2, 3, 5, 7, 6, 8, 9];
const ans = mergeSort(array);
console.log(ans);
