//tell the max count of vowels and consonents return 
function Frequency(str) {
    let map = {};

    for (let i = 0; i < str.length; i++) {
        map[str[i]] = !map[str[i]] ? 1 : ++map[str[i]];
    }
    console.log(map);


    let maxVowel = 0;
    let maxConso = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            if (map[str[i]] > maxVowel) {
                maxVowel = map[str[i]]
            }
        }
        else {
            if (map[str[i]] > maxConso) {
                maxConso = map[str[i]];
            }
        }
    }
    return maxConso + maxVowel;
}


const str = "asgasjdfjhsadfhfsdfusu";
const ans = Frequency(str);
console.log(ans);
