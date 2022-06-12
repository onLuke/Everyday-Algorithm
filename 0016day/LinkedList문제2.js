/* 
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list. 

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
*/

var detectCycle = function(head) {
    let tor = head, hare = head;
    
    while(hare && hare.next){
        tor = tor.next;
        hare = hare.next.next;
        if(tor === hare){
            tor = head;
            while(tor !== hare){
                tor = tor.next;
                hare = hare.next;
            }
            return tor;
        }
    }
    
    return null;
};