function hasCycle(head) {
    let set = new Set();
    let cur = head;
    while (cur) {
        if (set.has(cur)) {
            return true;
        }
        set.add(cur);
        cur = cur.next;

    }
    return false;

}

const ans = hasCycle(this.head);
console.log(ans);
