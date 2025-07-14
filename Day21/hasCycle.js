function hasCycle(head) {
    let set = new Set();
    let cur = head;
    while (cur) {
        set.add(cur);
        if (set.has(cur)) {
            return true;
        }

    }
    return false;

}

const ans = hasCycle(this.head);
console.log(ans);
