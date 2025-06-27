//write a program to reverse a number in and handle the limitation
function reverseNumber(num) {

    let rev = 0;
    num = Math.abs(num);
    while (num > 0) {
        let rem = num % 10
        num = Math.floor(num / 10);
        rev = (rev * 10) + rem;
    }
    return rev;
}
const num = -1223234;
const ans = reverseNumber(num);
console.log(ans);
