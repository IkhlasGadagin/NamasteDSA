//To rotate the list approach the two pointer to indetify the correct fast to place
//move until slow and fast points at the last 
//point the new head of the slow next and fast next points to the original head
// return the newHead
function RotateListOfLastIndex(head, k) {
    let cur = head;
    let length = 0;
    let slow = head;
    let fast = head;
    while (cur) {
        cur = cur.next;
        length = length + 1;
    }
    k = k % length;              //for k more than length of list

    for (let i = 0; i < k; i++) {    //correct fast position
        fast = fast.next;
    }

    while (fast.next) {            //go until kth element
        slow = slow.next;
        fast = fast.next;
    }

    let newHead = slow.next;
    slow.next = null;
    fast.next = head;

    return newHead;
}
const index = 2
RotateListOfLastIndex(this.head, index);