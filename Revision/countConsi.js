//Algorithm is that count the 1
//loop count else 
//select the max between the variable and the current 
//make reset the variable
//the map {}
//put each element count 
//return the key of one
function countCont(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = !map[arr[i]] ? 1 : ++map[arr[i]];
    }
    console.log(map);
    return map[1];
}
function countCon(arr) {
    let count = 0;
    let maxCon = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++
        }
        else {
            if (count > maxCon) {
                maxCon = count;
            }
            count = 0;
        }
    }
    return Math.max(count, maxCon);

}
const arr = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1];
const ans = countCont(arr);
const answer = countCon(arr);
console.log(ans, answer);
