//the anagram for the the group can be be done by sort the key is store if not 
//if present just add the perticular element to that the array by push
//it takes sorting for mlogn times 
//to improve this key can be generates and store in map{} with the same logic

//Algorithm
//for loop ..inner loop to itrate the each element
//the Array of size 26 with 0 value for each
//while the iterate take a char and identify the charCode and -'a'CharCode gives the perfect index 
//index and  it has just increase with +one
//for loop  until 26 append the empty variable ans the 1 67 give a String.fromChar also the refArray[i]
// map if the key and  not exist the key with array [current value]
//if key exist push the the currnt element
function groupAnagram(strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let s = strs[i];
        let freqArray = Array(26).fill(0);
        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArray[index]
        }
        let key = "";
        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(k) + freqArray[k]
        }

        if (!map[key]) {
            map[key] = [s];
        }
        else {
            map[key].push(s)
        }
    }
    return [...Object.values(map)]
}
const strs = ['tea', 'ate', 'eat', 'too', 'oto', 'ott', 'foo']
const ans = groupAnagram(strs);
console.log(ans);
