function SwapInPairListRecursively(head) {

    if (!head || !head.next) return head;
    let left = head;
    let right = head.next;

    left.next = SwapInPairListRecursively(right.next);  //right.next;
    right.next = left;
    return right;

}
SwapInPairListRecursively(this.head);