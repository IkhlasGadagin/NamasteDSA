//Algorithm is that count the 1
//loop count else 
//select the max between the variable and the current 
//make reset the variable

function countCon(arr) {
    let count = 0;
    let maxCon = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++
        }
        else {
            if (count > maxCon) {
                maxCon = count
            }
            count = 0;
        }
    }
    return Math.max(count, maxCon);

}
const arr = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1];
const ans = countCon(arr);
console.log(ans);
