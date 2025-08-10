//the Iso metric string 
// the string is said to be isometric the key 
// must be the same for the all 
//the value must not be the reprat for the different keys
//example title  is piper is the title
// the algorithm is tha the while mapping check for the dublicate
//the same for loop 
//the current element value if not equal mens not the isometric
function isoMorthic(s1, s2) {
    let map1 = {};
    let map2 = {};
    for (let i = 0; i < s1.length; i++) {
        if (!map1[s1[i]] && !map2[s2[i]]) {
            map1[s1[i]] = s2[i];
            map2[s2[i]] = s1[i];
        }
        else if (map1[s1[i]] !== s2[i]) {
            return false;
        }
        else if (map2[s2[i]] !== s1[i]) {
            return false;
        }
    }
    return true;
}
const str1 = "paperx";
const str2 = "vivelz";
const ans = isoMorthic(str1, str2);
console.log(ans);