function JewelsStonesSet(jewels, stones) {
    let set = new Set();
    for (let i = 0; i < jewels.length; i++) {
        set.add(jewels[i]);
    }

    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            count++
        }
    }
    return count;
}

const jewels = "Aa";
const stones = "AaabbbbAaaaaaaaa";      //3
const ans = JewelsStonesSet(jewels, stones);
console.log(ans);
