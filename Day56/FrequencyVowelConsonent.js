//the highest sun of the consonents and the vowel
function frequency(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = !map[str[i]] ? 1 : ++map[str[i]];
    }
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonentCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            if (map[str[i]] > vowelCount) {
                vowelCount = map[str[i]]
            }
        }
        else {
            if (map[str[i]] > consonentCount) {
                consonentCount = map[str[i]]
            }
        }
    }
    return consonentCount + vowelCount
}
const word = "aaabbbsjhdfsdkj";
const ans = frequency(word);
console.log(ans);
