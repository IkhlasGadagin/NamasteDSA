function removeDup(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let x = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > arr[i][x]) {
                arr[i][x] = arr[i][j]
                x = x + 1;
            }
            count = count + (x + 1)
        }

    }
    return count;
}


const arr = [[0, 1, 1, 2, 2, 3, 3], [0, 1, 1, 3, 4, 4, 7, 7], [3, 3, 9, 9, 11, 11, 17, 20, 20]]
const ans = removeDup(arr);
console.log(ans);
