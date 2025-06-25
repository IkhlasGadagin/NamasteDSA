function largest(arr) {
    let largestNum = -Infinity

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j]

            }

        }
    }
    return largestNum

}

const arr = [[1, 2, 5, 7], [9, 11, 17, 21], [3, 9]]
const ans = largest(arr);
console.log(ans);
