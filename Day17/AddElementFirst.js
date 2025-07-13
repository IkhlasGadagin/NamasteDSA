function addFirst(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;

}
const value = 4;
addFirst(value);

