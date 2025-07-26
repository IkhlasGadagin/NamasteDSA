function FindLetter(arr, x) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let wordLength = arr[i].length;
        console.log(arr[i].length);
        while (wordLength >= 0) {
            if (arr[i][wordLength] === x) {
                ans.push(i);
                break;
            }
            --wordLength;
        }

    }
    return ans;

}
const arr = ["ikh", "ikhlas", "developer"];
let x = 'h';
let ans = FindLetter(arr, x);
console.log(ans);
