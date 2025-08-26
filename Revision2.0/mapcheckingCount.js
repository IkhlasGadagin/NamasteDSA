function Count(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? ++map[arr[i]] : 1
    }
    return map;
}
const str = "jhsdafjhsgdjaf";
const ans = Count(str);
console.log(ans);
