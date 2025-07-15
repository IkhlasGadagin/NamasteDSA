//find the middle
//reverse the second half
//iterate from the end ans compare

function PalindromeList(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next;                     //2 step          
    }
    let curr = slow;
    let prev = null
    while (curr) {
        let temp = curr.next;
        current.next = prev;
        prev = curr;
        curr = temp;
    }

    let end = prev;
    let start = head;
    while (end) {
        if (start.val != end.val) {
            return false
        }
        end = end.next;
        start = start.next;
    }
    return true;
}
PalindromeList(this.head);