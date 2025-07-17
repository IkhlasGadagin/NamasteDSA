//create Sentiment
//move fast at the nth position
//move one step 
//remove the element
function RemoveElementAtLastnthIndex(head, n) {
    let sentiment = new Node();
    sentiment.next = head;
    let slow = sentiment;
    let move = sentiment;
    for (let i = 0; i < n; i++) {
        move = move.next;
    }
    let fast = move;

    while (fast.next) {
        slow = slow.next
        fast.next;
    }
    slow.next = slow.next.next
    return sentiment.next

}
const n = 2;   //remove the element from the last two
RemoveElementAtLastnthIndex(this.head, n);