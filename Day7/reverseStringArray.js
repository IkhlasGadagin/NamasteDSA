function reverseString(arr) {
    let last = arr.length;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[last - 1 - i];
        arr[last - 1 - i] = temp;
    }
    return arr;
}

const array = ['h', 'e', 'l', 'l', 'o', 'W']
const ans = reverseString(array);
console.log(ans);
