function singleNum(arr) {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];

    }
    return xor;
}


const arr = [4, 1, 2, 2, 1];    //return 4
const ans = singleNum(arr);
console.log(ans);
