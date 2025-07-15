function intersectList(headA, headB) {
    let set = new Set();
    let cur1 = headA;
    while (cur1) {
        set.add(cur1);
        cur1 = cur1.next;
    }

    let cur2 = headB;
    while (cur2) {
        if (set.has(cur2)) {
            return cur2
        }
        cur2 = cur2.next;
    }
    return null;
}

intersectList(this.headA, this.headB);