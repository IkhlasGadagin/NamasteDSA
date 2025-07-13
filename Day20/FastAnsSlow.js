function middleNode(head) {
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < size - 1; i++) {
        slow = slow.next;
        fast = slow.next.next;
        if (fast.next == null) {          //odd number digits
            return slow;
        }
        else if (fast.next.next == null) {
            return slow.next.next         //even numbers 
        }
    }
}
middleNode(this.head);