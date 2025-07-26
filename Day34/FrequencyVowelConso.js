//map add count character, iterte and checke 
// vowel if more map value max return  add both
function FrequencyVowelConso(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = !map[str[i]] ? 1 : ++map[str[i]];
        // if (!map[str[i]]) {
        //     map[str[i]] = 1;
        // }
        // else {
        //     ++map[str[i]];
        // }
    }

    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConso = 0;
    let mapKeys = Object.keys(map);

    for (let i = 0; i < mapKeys.length; i++) {
        //is vowel
        if (vowel.includes(mapKeys[i])) {
            if (map[mapKeys[i]] > maxVowel) {
                maxVowel = map[mapKeys[i]];
            }
        }
        else {
            if (map[mapKeys[i]] > maxConso) {
                maxConso = map[mapKeys[i]]
            }
        }
    }

    return maxVowel + maxConso;

}
const str = "suuccess"
const ans = FrequencyVowelConso(str);
console.log(ans);
