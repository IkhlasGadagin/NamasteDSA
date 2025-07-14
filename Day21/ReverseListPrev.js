function ReverseListPrev(head) {
    let prev = null;
    let cur = head;
    while (cur != null) {
        let temp = cur.next;
        cur.next = prev;
        cur = prev;
        temp = cur;
    }
    head = prev;

}