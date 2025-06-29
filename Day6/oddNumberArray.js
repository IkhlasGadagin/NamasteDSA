//arrange the elemnents in odd order and return the index
//[2,3,4,5,6,7,8,7,4,3,3,5,10,12,13,14]
//[2,4,6,8,10,12,14,3,5,7,3,3,7,8,8,9]

function evenNumber(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            arr[x] = arr[i];
            x = x + 1
        }
    }
    return arr;
}

const array = [2, 3, 4, 5, 6, 7, 8, 7, 4, 3, 3, 5, 10, 12, 13, 14]
const ans = evenNumber(array);
console.log(ans);
