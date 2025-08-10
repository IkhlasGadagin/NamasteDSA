//Problems for the likind list  
//the rotated listlist for the Likindlist
//the link take the  mode of the k rotating 
//for loop for the kth position
//the kth and  make null and new head and connect fast to th old head 
//return new head

function RotatedList(head, k) {
    let slow = head;
    let fast = head;
    let count = 0;
    let cur = head;
    while (cur) {
        cur = cur.next;
        ++count;
    }
    k = k % count;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    let newHead = null;
    newHead = slow.next;
    slow.next = null;
    fast.next = head;
    return newHead;

}

const postion = 2;