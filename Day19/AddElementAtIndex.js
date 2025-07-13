function addElement(val, index) {
    let newNode = new Node(val);
    if (index == 0) {
        this.addAtFirst(val);
        return;
        /* 
        newNode.next = this.head;
        head.next = newNode;
        size++;
        */
    }

    else if (index == this.size) {
        let curr = this.head;
        while (curr.next != null) {
            cur = cur.next;
        }
        cur.next = newNode;
        this.size++;
    }


    const cur = this.head;
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;

}
const element = 11;
const index = 1;
const ans = addElement(element, index);
console.log(ans);
