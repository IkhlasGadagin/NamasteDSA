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
//add all the elements of any list to the set table
//the take to copy of the second list and iterate until null
//check is the element is exist before  if yes return node
//move until null
