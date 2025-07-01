function maxLoss(arr) {
   let max = arr[0]
   let maxLoss = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] - max < maxLoss) {
         maxLoss = arr[i] - max

      }
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return maxLoss;
}
const arr = [8, 10, 2, 1, 3, 7, 4]
const ans = maxLoss(arr);
console.log(ans);

//each Number(find smalles) - biggest Number = max loss 