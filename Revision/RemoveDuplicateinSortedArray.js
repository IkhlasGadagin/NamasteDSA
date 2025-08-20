//the algorithm is 
//iterate each element 
//take variable holds 0
//if the current element is greater tha the position of 
//the dry run is the important
//move ex and put the value that's it
function RemoveDuplicate(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x = x + 1;
            arr[x] = arr[i];
        }
    }
    let ans = []
    for (let i = 0; i < x + 1; i++) {
        ans.push(arr[i])
    }
    return ans;
}
const arr = [0, 0, 0, 1, 2, 2, 3, 3, 4, 5];
const ans = RemoveDuplicate(arr);
console.log(ans);
