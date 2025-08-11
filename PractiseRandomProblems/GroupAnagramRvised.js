

function GroupAnagram(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        let sortedString = s[i].split('').sort().join('');
        if (!map[sortedString]) {
            map[sortedString] = [s[i]];
        }
        else {
            map[sortedString].push(s[i]);
        }
    }
    return [...Object.values(map)];

}
const str = ["mom", "omm", "mmo", "to", "ot"];
const ans = GroupAnagram(str);
console.log(ans);