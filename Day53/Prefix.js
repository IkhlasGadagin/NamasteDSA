/* 
to check prefix x  while loop 
if for loop until first element
take the element as char
for loop starts from the 1 ans ends return the sunstring
corner case handle ;
*/
function Prefix(arr) {
    let x = 0;
    let ele = arr[0].length;

    while (x < ele) {
        let ch = arr[0][x];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i][x] != ch && arr[i].length === x) {
                return arr[0].substring(0, x);
            }
        }
        x++;
    }
    return arr[0]

}
const arr = ["flower", "flow", "flight"];
const ans = Prefix(arr);
console.log(ans);
