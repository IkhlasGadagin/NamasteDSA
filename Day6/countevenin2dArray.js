function countEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let x = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] % 2 == 0) {
                arr[i][x] = arr[i][j];
                x = x + 1;
            }

        }
        count = count + x;
    }
    console.log(arr);
}

const array = [[2, 4, 9, 11, 13], [5, 9, 7, 14], [2, 4, 3, 6, 7, 11, 17, 18]]
const ans = countEven(array);
console.log(ans);
