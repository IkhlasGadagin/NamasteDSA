// the head is given and palindrome
//find the middle
//reverse the node from the middle
//keep moving the piniter 
function Palindrome(head) {
    let slow = head;
    let fast = head;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let cur = slow;
    let prev = null;
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    let second = prev;
    let first = head;
    while (prev.next) {
        if (first.val != second.val) {
            return false;
        }
        else {
            first = first.next;
            second = second.next;
        }
    }
    return true;
}
const ans = Palindrome(this.head);
console.log(ans);
