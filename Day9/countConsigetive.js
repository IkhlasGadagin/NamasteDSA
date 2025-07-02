function countCon(arr) {
    let count = 0
    let maxCount = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 1) {
            count++
        }
        else {
            maxNumber = Math.max(count, maxCount);
            count = 0
        }

    }

    return Math.max(count, maxCount);
}

const arr = [1, 1, 0, 1, 1, 1];
const ans = countCon(arr);
console.log(ans);
