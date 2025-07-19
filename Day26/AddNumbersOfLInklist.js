function AddNumbersOfLInklist(list1, list2) {
    let carry = 0
    let ans = new NodeList();
    let ansHead = ans;
    while (list1 || list2 || carry) {
        let sum = (!list1 ? 0 : list1.val) + (!list2 ? 0 : list2.val) + carry;

        carry = Math.floor(sum / 10);
        let digit = sum % 10;
        let newNode = new NodeList(digit);
        ans.next = newNode
        ans = ans.next;

        list1 = list1 && list1.next;
        list2 = list2 && list2.next;
    }
    return ansHead.next
}

AddNumbersOfLInklist(this.head1, this.head2);