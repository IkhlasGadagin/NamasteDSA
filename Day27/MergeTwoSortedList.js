function MergeTwoSortedList(l1, l2) {
    let cur = null;
    if (l1.val < l2.val) {
        cur = l1;
        l1 = l1.next;
    }
    else {
        cur = l2;
        l2 = l2.next;
    }
    let start = cur;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l2;
            l2 = l2.next;
            cur = cur.next;
        }
        else {
            cur.next = l2;
            l2 = l2.next;
            cur = cur.next;
        }

        if (!l1) {
            cur.next = l2;
        }
        if (!l2) {
            cur.next = l1;
        }
    }
    return start;
}

MergeTwoSortedList(this.head1, this.head2);