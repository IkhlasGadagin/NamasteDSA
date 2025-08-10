//Time for the Anagram
// Anagram is the if the 2 string is said to be anagram if the 2nd string
//is the exact sheffeled with different with the same words
//Algorithm is the 
//put count of the each leter in the map
//iterate the second string dcrease the key value 
//if not present return false and crosses 0 means false
//return true if the correct


function Anagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    let map = {};
    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = !map[s1[i]] ? 1 : ++map[s1[i]];
    }
    console.log(map);
    for (let i = 0; i < s2.length; i++) {
        if (!map[s2[i]] && map[s2][i] < 0) {
            return false;
        }
        --map[s2[i]]
    }
    return true;
}
const st1 = "ikhllaskx"
const st2 = "hlaslkikx"
const ans = Anagram(st1, st2);
console.log(ans)