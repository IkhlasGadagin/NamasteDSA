// function middleNode(head) {
//     if (head.next == null) return head.val;
//     if (head.next.next == null) return head.next.val;
//     else {
//         let slow = this.head;
//         let fast = this.head;
//         for (let i = 0; i < size - 1; i++) {
//             slow = slow.next;
//             fast = fast.next.next;
//             if (fast.next == null) {          //odd number digits
//                 return slow;
//             }
//             else if (fast.next.next == null) {
//                 return slow.next.next         //even numbers 
//             }
//         }
//     }

// }
// middleNode(this.head);
function FastAndSlow(head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {      //for even numbers fast becomes null at the last sec
        //for odd numbers fast.next becomes null at the end
        slow = slow.next;
        fast = fast.next.next;

    }
    return slow;
}
const ans = FastAndSlow(this.head);
