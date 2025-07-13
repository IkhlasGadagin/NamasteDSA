function DeleteElementofIndex(index) {
    if (index < 0 || index >= size) return;

    if (index === 0) {
        this.head = this.head.next;
        size--;
    }
    else {
        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }

        cur.next = cur.next.next;
        this.size--;
    }

}

const val = 5;
DeleteElementofIndex(5);