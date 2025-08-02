/* 
Input: s = "egg", t = "add"
Output: true
Input: s = "foo", t = "bar"
Output: false
Input: s = "paper", t = "title"
Output: true
t.length == s.length
*/
/* 
Algorithm is create two maps 
check string1 elements for the first map 
check string2 elements for the second map
by the same for loop for same i's value check for both 
should not present before values perticurarly
if not present the keys of map1 must hold the values of string2 seralilly
if not present the keys of map2 must hold the values of string1 seralilly 
*/
function isoMorthic(str1, str2) {
  if (str1.length !== str2.length) return false
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < str1.length; i++) {  //both has same length
    //check
    if (!map1[str1[i]] && !map2[str2[i]]) {
      map1[str1[i]] = str2[i];
      map2[str2[i]] = str1[i];
    }

    else if (map1[str1[i]] !== str2[i]) {
      return false
    }
    else if (map2[str2[i]] !== str1[i]) {
      return false
    }
  }

  return true;
}

const s = "paper";
const t = "vivle";
const ans = isoMorthic(s, t);
console.log(ans);
