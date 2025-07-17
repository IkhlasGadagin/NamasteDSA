function RemoveElementAtLastnthIndexTwoPASS(head, n) {
    let cur = head;
    let count = 0;
    while (cur) {

        cur = cur.next;
        count++;
    }
    let setiment = new ListNode();
    setiment.next = head;
    let prev = setiment;

    for (let i = 0; i < count - n; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return setiment.next;
};

const deleteElementOfindexFromLast = 2
RemoveElementAtLastnthIndexTwoPASS(this.head, deleteElementOfindexFromLast);