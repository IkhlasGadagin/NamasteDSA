//write a program to reverse a number in and handle the limitation
function reverseNumber(num) {
    let rev = 0;
    const original = num;
    num = Math.abs(num);
    while (num > 0) {
        let rem = num % 10
        num = Math.floor(num / 10);
        rev = (rev * 10) + rem;
    }

    const limit = Math.pow(2, 31);
    if (rev > limit || rev < -limit) return 0

    return (original < 0) ? -rev : rev;


}
const num = -823234;
const ans = reverseNumber(num);
console.log(ans);
