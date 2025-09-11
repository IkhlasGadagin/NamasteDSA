/* 
the sum of the highest vowel ans the consonents
the  aeiou
if the element is vowel 
take a map count track
if the eelement is vowel take the value and store in varaiable 
and add to variable if greater 
if > and use map too 
*/
function Freq(arr) {
    let s = arr.split('');
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxCon = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            // if (map[s[i]] > maxVowel) {
            //     maxVowel = map[s[i]]
            // }
            maxVowel = Math.max(maxVowel, map[s[i]]);
        }
        else {
            if (map[s[i]] > maxCon) {
                maxCon = map[s[i]]
            }
        }
    }
    console.log(maxCon, maxVowel, map);

    return maxVowel + maxCon


}
const arr = "ajsdhjgjaeeeeesgdjjsadcnzfzzz";
const ans = Freq(arr);
console.log(ans);
