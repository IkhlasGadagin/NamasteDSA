function getElementofIndex(index) {
    if (index < 0 || index >= size) return -1

    if (index == 0) return this.head.val;
    // if(index ==size) return 

    // while(curr.next!=null)
    let curr = this.head;

    for (let i = 0; i < index; i++) {
        curr = curr.next;

    }
    return curr.val;
}

const index = 5;
getElementofIndex(index)