//Algorithm  point the 3 pointer
// point the prev at next
//first should point at third
//second to first
//move the pointers correctly pleas 
//handle the cases
function SwapPractise(head) {
    if (!head || !head.next) return head;
    let sentimen = new NodeList();
    sentimen.next = head;

    let prev = sentimen;
    let cur = head;
    let n = head.next;

    while (cur && n) {
        prev.next = n;
        cur.next = n.next;
        n.next = cur;

        prev = cur;
        cur = prev.next;
        n = cur && cur.next;

    }
    return sentimen.next;
}
SwapPractise(this.head);
