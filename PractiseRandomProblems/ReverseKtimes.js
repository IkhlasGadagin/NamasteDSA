//converst array thr string need to reverse the k elements in the array
//for loop care increment
//inner loop upto k
//temp swap 
//return by join

function ReverseKtime(s, k) {
    let str = s.split('');
    for (let x = 0; x < str.length; x = x + k) {
        let mid = Math.floor(k / 2);
        for (let i = 0; i < mid; i++) {
            let temp = str[x + i];
            str[x + i] = str[x + k - 1 - i];
            str[x + k - 1 - i] = temp;
        }
    }
    return str.join('');

}

const str = 'beagoodsoftwareengineer';
const k = 3;
const ans = ReverseKtime(str, k);
console.log(ans);
