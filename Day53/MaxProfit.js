function maxProfit(arr) {
    let min = arr[0];
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] - min) > maxProfit) {
            maxProfit = arr[i] - min;
        }
        if (arr[i] > min) {
            min = arr[i];
        }
    }
    return maxProfit;
}

const arr = [3, 2, 5, 1, 4, 12, 69];
const ans = maxProfit(arr);
console.log(ans);
