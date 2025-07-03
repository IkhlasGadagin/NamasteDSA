function NumberTwice(arr) {
    let obj = {};
    let nums = "";
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == 2) {
            nums = nums + arr[i]
        }
    }

    return nums
}

const arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 0, 0, 0, 5, 5, 7];
const ans = NumberTwice(arr);
console.log(ans);
