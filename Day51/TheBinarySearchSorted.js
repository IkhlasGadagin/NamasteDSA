function Search(arr, target) {
    let l = 0;
    let r = arr.length;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) return mid;
        if (arr[l] < arr[mid]) {
            if (target >= arr[l] && target < arr[mid]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else {
            if (target <= arr[r] && target > arr[mid]) {
                l = mid + 1
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}
const arr = [5, 6, 7, 0, 1, 2, 3, 4];
const target = 0;
const ans = Search(arr, target);
console.log(ans);
