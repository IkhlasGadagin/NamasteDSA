//Steps are create sedimen node connext to the head
//for loop for the fast node detection take also slow
//fo until slow delete next,next =  null

function DeleteLastnthAllNodes(head, index) {
    let sentimen = new NodeList();
    sentimen.next = head;
    let slow = sentimen;
    let fast = sentimen;
    for (let i = 0; i < index; i++) {
        if (fast.next === null) return head;
        fast = fast.next
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = null;
    return sentimen.next;
}
const index = 2;
DeleteLastnthAllNodes(this.head, index);

/* 
function deleteFromNthNodeFromEnd(head, index) {
    let sentinel = new ListNode(0);
    sentinel.next = head;

    let fast = sentinel;
    let slow = sentinel;

    // Move 'fast' pointer 'index' steps ahead
    for (let i = 0; i < index; i++) {
        if (fast.next === null) return head;  // index too large, no deletion
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Delete from slow.next to end
    slow.next = null;

    return sentinel.next;
}

*/