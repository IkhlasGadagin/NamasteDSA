//to remove the element maintain one variable 
// before head like pev to remove the head element too
//skip if the value found same
//else move prev


function RemoveElement() {
    let sentiment = new Node();
    sentiment.next = head;
    let prev = sentiment;
    while (prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        }
        else prev = prev.next;                          //else is important if the matches its skips do not again move next
    }
    return sentiment.next;
}
RemoveElement(this.head, val);