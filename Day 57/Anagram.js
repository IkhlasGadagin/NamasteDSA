/* the anagram is that jumbled 
count mens the set 
*/
function Anagram(s1, s2) {
    if (s1.length != s2.length) return false
    let map = {};
    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = !map[s1[i]] ? 1 : ++map[s1[i]]
    }
    for (let i = 0; i < s2.length; i++) {
        if (!map[s2[i]]) {
            return false;
        }
        if (map[s2[i]] < 0) {
            return false;
        }
        else {
            --map[s2[i]]
        }
    }
    return true;
}
const s1 = "ababa";
const s2 = "babaa";
const ans = Anagram(s1, s2);
console.log(ans);
