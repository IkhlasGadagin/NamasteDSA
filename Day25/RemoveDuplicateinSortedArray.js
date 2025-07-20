var deleteDuplicates = function (head) {
    let cur = head;
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        }
        else {
            cur = cur.next
        }
    }
    return head;
};
/* 
 let cur = head;
    while (cur && cur.next) {
     if(cur.val===cur.next.val){
        cur.next = cur.next.next;
     }
     else{
        cur = cur.next
     }
    }
    return head;
*/
/*
 // if(!head) return false;
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
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let start = head;
    let end = prev;

    while (end) {
        if (start.val == end.val) {
            end = end.next;
            start = start.next;
        }
        else return false

    }
    return true; 

*/