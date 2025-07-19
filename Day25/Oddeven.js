// the given list that the first and
/*
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
 */
function removeDuplicateSorted(head) {
    let odd = head;
    let even = head.next;
    let evenStart = even;

    while (odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenStart
    return head;
}

removeDuplicateSorted(this.head);