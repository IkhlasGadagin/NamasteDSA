//map store loop t and check for not present and not less that 0
function Anagram(s, t) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }
    console.log(map);

    for (let i = 0; i < t.length; i++) {

        if (!map[t[i]]) {
            return false;
        }
        if (map[t[i]] < 0) {       //-Num return false duplicate exist
            return false;
        }
        else {
            --map[t[i]];
        }
    }
    return true;

}

const s = "ikhlaas";
const t = "iahlkas";

const ans = Anagram(s, t);
console.log(ans);
