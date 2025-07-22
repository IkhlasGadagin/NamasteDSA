function SwapNodesInPAIR() {
    let sentimen = new Node();
    let copysentimen = sentimen;
    while (sentimen) {
        sentimen.next = sentimen.next.next;
        let prev = null;
        sentimen.next = prev;
        prev = sentimen.next;
        sentimen = sentimen.next;

    }
    return copysentimen.next
}


SwapNodesInPAIR(this.head);