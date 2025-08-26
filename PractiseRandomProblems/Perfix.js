//yo write know the prefix 
//loop for the first element 
//variable that stores the 0
//loop starts from the 1 ends length arr[i][x]
//two conditions that is when not equal return sub strig from first substring
//also if the length is if length is same 
//lastly return the wlole first string

function Prefix(arr) {
    let flen = arr[0].length;
    let x = 0;

    while (x < flen) {
        let char = arr[0][x];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i][x] !== char || x === arr[i][0]) {
                return arr[0].substring(0, x)
            }
        }
        x++;
    }
    return arr[0]

}
const arr = ["flight", "flow", "flower"];   //fl
const ans = Prefix(arr);
console.log(ans);
