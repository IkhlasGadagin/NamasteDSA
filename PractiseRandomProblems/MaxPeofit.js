// function maxProfit(arr) {
//     let maxProfit = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] - arr[i] > maxProfit) {
//                 maxProfit = arr[j] - arr[i]
//             }
//         }
//     }
//     return maxProfit

// }
function maxProfit(arr) {
    let maxProfit = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if ((arr[i] - min) > maxProfit) {
            maxProfit = arr[i] - min;
        }

    }
    return maxProfit;
}
const arr = [4, 13, 14, 2, 1, 100]   //1-14 is the max profit 
const ans = maxProfit(arr);
console.log(ans);
