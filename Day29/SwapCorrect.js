function SwapCorrect(head) {
    let dummy = new NodeList();
    dummy.next = head;

    let prev = dummy;
    let cur = head;
    let n = head.next;

    while (cur && n) {

        prev.next = n;
        cur.next = n.next;
        n = cur;

        prev = cur;
        cur = prev.next;
        n = cur.next;

    }
    return dummy.next;

}
SwapCorrect(this.head);