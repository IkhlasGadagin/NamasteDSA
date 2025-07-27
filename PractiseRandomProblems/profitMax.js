//max profit means that big- smallest is greater
function profitMax(arr) {
    let min = arr[0];
    let maxprofit = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] - min) > maxprofit) {
            maxprofit = arr[i] - min;

        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return maxprofit;
}

const days = [7, 1, 5, 3, 6, 4]
const ans = profitMax(days);
console.log(ans);
