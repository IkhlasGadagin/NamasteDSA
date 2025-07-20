//merge th two sorted using the extra node and return the gead
// Algorithm is that create a node
// identify the the first element of the each 
//move current and the list which has less value
//handle corner case for the null point list
//return the copy of node that is node.next

function HelperNodeMergeTwoSortedList(list1, list2) {
    let cur = new ListNode();
    let curcopy = cur;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
            cur = cur.next;
        }
        else {
            cur.next = list2;
            list2 = list2.next;
            cur = cur.next;
        }

    }
    if (!list1) {
        cur.next = list2;
    }
    if (!list2) {
        cur.next = list1;
    }
    return curcopy.next;
}

HelperNodeMergeTwoSortedList(this.head1, this.head1)