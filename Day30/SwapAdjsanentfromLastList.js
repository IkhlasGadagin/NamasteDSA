var swapNodes = function (head, k) {
    let sentimen = new ListNode();
    sentimen.next = head;
    let slow = sentimen;
    let fast = sentimen;
    let first = sentimen;
    let second = sentimen;

    for (let i = 0; i < k; i++) {
        first = first.next;
    }

    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    second = slow.next;

    let temp = second.val;
    second.val = first.val;
    first.val = temp

    return sentimen.next;
};