function RotateListLastnthPosition(head, n) {
    let length = 0;
    let cur = head;
    while (cur) {
        cur = cur.next;
        length++;
    }
    let index = n % length; //2 times

    let sentimen = new NodeList();
    sentimen.next = head;

    let sentimenCopy = sentimen;
    let fast = sentimen;
    let slow = sentimen;
    for (let i = 0; i < index; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    let temp = slow.next;
    head = temp;
    slow.next = null;
    while (temp) {
        temp = temp.next;
    }              //mark as head
    sentimen.next = temp.next;
    return sentimenCopy.next;
}
const index = 2
RotateListLastnthPosition(this.head, index)