function DeleteElementofIndex(index) {
    if (index < 0) return -1;

    if (index === 0) {
        this.head = this.head.next;
        size--;
    }
    let cur = this.head;
    while (cur.next != null) {
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
    }
    cur.next = cur.next.next;
    this.size--;
}

const val = 5;
DeleteElementofIndex(5);