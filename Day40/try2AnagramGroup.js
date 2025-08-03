//for loop take a element and sort and check in the map 
//if present push the arr[i] to the identified key
//else create new key and push the current value to soterd key

function AnagramGroup(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        let strkey = str[i].split('').sort().join('');
        if (!map[strkey]) {
            map[strkey] = [str[i]]
        }
        else {
            map[strkey].push(str[i]);
        }
    }
    return [...Object.values(map)]
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

const ans = AnagramGroup(strs);
console.log(ans);