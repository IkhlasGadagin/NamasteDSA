//Algorithm is that 
//create a  node attatch the first to smallest among three ans move cur and that list 
// handle corner  case and return the copy the new node

function Merge3LIst(l1, l2, l3) {
    let start = new NodeList();
    let startHead = start;
    if (l1.val <= l2.val && l1.val <= l3.val) {
        start.next = l1;
        l1 = l1.next;
    } else if (l2.val <= l1.val && l2.val <= l3.val) {
        start.next = l2;
        l2 = l2.next;
    } else {
        start.next = l3;
        l3 = l3.next;
    }

    while (l1 && l2 && l3) {
        if (l1.val <= l2.val && l1.val <= l3.val) {
            start.next = l1;
            l1 = l1.next;
            start = start.next;
        } else if (l2.val <= l1.val && l2.val <= l3.val) {
            start.next = l2;
            l2 = l2.next;
            start = start.next;

        } else {
            start.next = l3;
            l3 = l3.next;
            start = start.next;
        }

    }

    if (!l1) {
        if (l2.val < l3.val) {
            start.next = l2;
            l2 = l2.next;
            start = start.next;
        }
        if (l3.val < l2.val) {
            start.next = l3;
            l3 = l3.next;
            start = start.next;
        }

    }

    if (!l2) {
        if (l1.val < l3.val) {
            start.next = l1;
            l1 = l1.next;
            start = start.next;
        }
        if (l3.val < l1.val) {
            start.next = l3;
            l3 = l3.next;
            start = start.next;
        }
    }
    if (!l3) {
        if (l1.val < l2.val) {
            start.next = l1;
            l1 = l1.next;
            start = start.next;
        }
        if (l2.val < l1.val) {
            start.next = l2;
            l2 = l2.next;
            start = start.next;
        }
    }
    return startHead.next
}

Merge3LIst(this.head1, this.head2, this.head2);