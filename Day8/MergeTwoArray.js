function MergeTwo(arr1, m, arr2, n) {
    //take copy of the first array
    let copyArray1 = arr1.slice(0, m);
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && copyArray1[p1] < arr2[p2])) {
            arr1[i] = copyArray1[p1];
            p1 = p1 + 1;

        }
        else {
            arr1[i] = arr2[p2]
            p2 = p2 + 1;
        }

    }
    return arr1;
}

const arr1 = [1, 2, 3]
const arr1length = arr1.length;
const arr2 = [2, 5, 6]
const arr2length = arr2.length;

const ans = MergeTwo(arr1, arr1length, arr2, arr2length)
console.log(ans);
