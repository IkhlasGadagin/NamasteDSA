//the 2 approaches are there 
//two loops the cur - prev greater 
function Profit(arr) {
    let maxProfit = arr[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[j] - arr[i]) > maxProfit) {
                maxProfit = arr[j] - arr[i];
            }
        }
    }
    return maxProfit;
}
const arr = [2, 1, 5, 3, 7, 5,];
const ans = Profit(arr);
console.log(ans);
