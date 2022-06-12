/* 
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

*/

var reverseList = function(head) {
    const new_head = makeReverse(null, head);
    return new_head;
};

const makeReverse = (prev, cur) => {
    if(cur === null){
        return prev;
    }
    const new_head = makeReverse(cur, cur.next);
    cur.next = prev;
    return new_head;
}


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function rev(head){
    let  pre=null;
    while(head)
        {
            let temp=head.next;
            head.next=pre;
            pre=head;
            head=temp
        }
    return pre;
}


let node = new ListNode(3, 4);
node.next = 5;

console.log(node);

console.log(rev(node));