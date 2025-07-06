//Finde the fabonacci number of the given number
// the febonacci is nothing but the sum of the previous number 
// the base is the 0 and the 1 
//  0,1,1,2,3,5,8,13..........
// find for the n number n = (n-1)+(n-2);
function Fab(n) {
    if (n <= 1) {
        return n;
    }

    return Fab(n - 1) + Fab(n - 2);
}
const num = 6;
const ans = Fab(num);
console.log(ans);
