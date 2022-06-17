/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/* 
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1,2], n = 1
Output: [1]

Input: head = [1], n = 1
Output: []

*/
 var removeNthFromEnd = function(head, n) {
    if(head == null || head.next == null) return null;
      
      let prev = new ListNode(-1,head),
          slow = prev,
          faster = head,
          count = 0;
      
      while(faster){
          faster = faster.next;
          if(count++ >= n){
              slow = slow.next;
          }
      }
      
      slow.next = slow.next.next
      
      return prev.next
  };