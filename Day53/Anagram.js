/* 
the anagram means that the name with jumbeles 
count the characters and store in the map
for loop and 
if not present ans < zero means not ans
dreses count 
*/
function Anagram(s, t) {
    if (s.length != t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }

    for (let i = 0; i < t.length; i++) {

        if (!map[t[i]] || map[t[i]] < 0) {
            return false;
        }
        --map[t[i]]
    }
    return true;
}
const s = 'ikhlxaxss';
const t = "ixxklhass";
const ans = Anagram(s, t);
console.log(ans);
