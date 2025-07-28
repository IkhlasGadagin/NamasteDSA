//reverse the k elements and for he 2k
//for loop to skip for 2k
//for loop to swap k elements also for the 2k ele


function ReeverseStringtwo(s, k) {
    let str = s.split('');
    console.log(s);
    for (let x = 0; x < str.length; x = x + (2 * k)) {
        let mid = Math.floor(k / 2);
        for (let i = 0; i < mid; i++) {
            let temp = str[x + i];
            str[x + i] = str[x + k - 1 - i];
            str[x + k - 1 - i] = temp;
        }

    }
    return str.join('');

}
const str = "infinitysuccess";
const k = 2;
const ans = ReeverseStringtwo(str, k);
console.log(ans);

