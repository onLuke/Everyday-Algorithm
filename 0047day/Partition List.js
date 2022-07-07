var partition = function(head, x) {
    const dummyLess = new ListNode();
    const dummyMore = new ListNode();
    let node = head;
    let less = dummyLess;
    let more = dummyMore;
    while (node) {
        if(node.val < x){
            less.next = node;
            less = less.next;
          }else{
            more.next = node;
            more = more.next;
          }
        node = node.next;
    }
    less.next = dummyMore.next;
    more.next = null;
    return dummyLess.next;
};