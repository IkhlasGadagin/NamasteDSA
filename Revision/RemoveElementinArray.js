//to remove the perticular element 
//the logic is that the x = 0
//if yhe if not put 
function removeElement(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != val) {
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    let ans = []
    let y = 0;
    while (y < x) {
        ans.push(arr[y]);
        y++;
    }
    return ans;
}
const arr = [1, 2, 2, 3, 4, 3, 2, 3, 3, 1, 6, 7, 5, 5, 5, 9];
const num = 2;
let ans = removeElement(arr, num);
console.log(ans);
