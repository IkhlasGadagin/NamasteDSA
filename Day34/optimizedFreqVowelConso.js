//task is that add maxfrequent vowel and maxfrequent consonent 
function freqVowelConsonent(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = !map[str[i]] ? 1 : ++map[str[i]];
    }
    console.log(map);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonents = 0;
    let mapKeys = Object.keys(map);
    console.log(mapKeys)
    for (let i = 0; i < mapKeys.length; i++) {
        //isvowel
        if (vowels.includes(mapKeys[i])) {
            // if(map[str[i]]>maxVowel){
            //      maxVowel  =map[str[i]];
            // }
            //   if(maxVowel<map[str[i]]){
            //       maxVowel = map[str[i]];
            //   }
            maxVowel = Math.max(maxVowel, map[mapKeys[i]])
        }
        //isconsonent
        else {
            // if(map[str[i]]>maxConsonents){
            //   maxConsonents =map[str[i]] 
            // }
            maxConsonents = Math.max(maxConsonents, map[mapKeys[i]])
        }
    }
    return maxVowel + maxConsonents
}
const str = "succeeeeeeeeeeeessffffffffffffsssss";
const ans = freqVowelConsonent(str);
console.log(ans);
