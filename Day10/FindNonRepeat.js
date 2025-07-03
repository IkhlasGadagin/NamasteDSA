function findNonRepeat(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == 1) {
            return arr[i]
        }
    }
}

const arr = [1, 1, 2, 2, 4, 5, 6, 6, 4]
const ans = findNonRepeat(arr);
console.log(ans);
