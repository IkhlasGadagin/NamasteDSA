function VowelsConsonentsMaxHash(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }

    let arr = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxconso = 0;

    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            maxVowel = obj[str[i]];
        }
        else {
            maxconso = obj[str[i]];
        }
    }

    return maxVowel + maxconso;


}

const str = "successess";
const ans = VowelsConsonentsMaxHash(str);
console.log(ans);
