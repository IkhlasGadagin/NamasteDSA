//Frequency and the Prefix  and the Anagram
//To solve the freq 
//loop throught the each element 
// array that tells vowels 
//if not it is consonents
//2 variable 
//map for the count of the each element 
function Freq(str) {
    let map = {};
    let s = str.toLowerCase().split('');
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }

    let ObjectKey = Object.keys(map);
    console.log(ObjectKey)
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelcount = 0;
    let consonentscount = 0;
    for (let i = 0; i < ObjectKey.length; i++) {
        if (vowels.includes(ObjectKey[i])) {
            vowelcount = Math.max(vowelcount, map[ObjectKey[i]])
        }
        else {
            consonentscount = Math.max(consonentscount, map[ObjectKey[i]])
        }
    }
    return vowelcount + consonentscount;
}

const str = "vowelvowelconsonents";
const ans = Freq(str);
console.log(ans);

