function SwapINPAIRList(head) {
    let prev = new NodeList();
    prev.next = head;
    let cur = head;
    let next = head.next

    while (cur && next) {
        prev.next = next;
        cur.next = next.next;
        next.next = cur;
    }
    return prev.next;
}
SwapINPAIRList(this.head);