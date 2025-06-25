function largest(arr) {
    let largestNum = -Infinity
    let secondlargestNum = -Infinity

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNum) {
                secondlargestNum = largestNum
                largestNum = arr[i][j]

            }
            else if (arr[i][j] > secondlargestNum && arr[i][j] != largestNum) {
                secondlargestNum = arr[i][j]

            }

        }
    }
    return secondlargestNum

}

const arr = [[1, 2, 5, 7], [9, 11, 89, 17, 21, 21, 21], [3, 9, 17, 19, 19, 89]]
const ans = largest(arr);
console.log(ans);
