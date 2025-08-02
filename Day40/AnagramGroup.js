//group the Anagram in the array
// thke the individual element and that element to check all helper function
//if true push to the array
function AnagramGroup(strs) {
    let ans = [];
    let x = 0;
    while (x < strs.length) {
        let curElement = strs[x]
        for (let i = 1; i < strs.length; i++) {
            let anagram = checkAnagram(curElement, strs[i]);
            if (anagram) {
                //ans.push(curElement,str[i])
                ans.push(strs[i])
            }
            else {
                ans.push(curElement)
            }
        }
        x++
    }
    return ans;

}
function checkAnagram(str1, str2) {
    let map = {};
    for (let i = 0; i < str1.length; i++) {
        map[str1[i]] = !map[str1[i]] ? 1 : ++map[str1[i]];
    }

    for (let i = 0; i < str2.length; i++) {
        if (!map[str2[i]] && map[str2[i]] < 0) {
            return false
        }
        --map[str2[i]];
    }
    return true

}
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

const ans = AnagramGroup(strs);
console.log(ans);
