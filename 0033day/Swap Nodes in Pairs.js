/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next){
    this.val = val === undefined ? 0: val;
    this.next = next === undefined ? null : next
}
let head = new ListNode(1)

head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);



 var swapPairs = function(head) {
   
    if(!head || !head.next) return head;

    const prev = head, current = prev.next, temp = current.next;

    current.next = prev;
    prev.next = swapPairs(temp);

    return current;
};

console.log(swapPairs(head))
