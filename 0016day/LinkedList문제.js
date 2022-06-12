/* 
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
*/

var hasCycle = function(head) {
    const map = new Map();
    while(head !== null){
        if(!map.has(head)){
            map.set(head, true);
            head = head.next;
        }else{
            return true;
        }
    }
    return false;
};
    

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node = new ListNode(3);

ListNode.prototype.append = function(value){
    let node = new ListNode(value);
    let current = this.next;
    if(current == null){
        this.next = node;
    }else{
        while(current.next != null){
            current = current.next;
        }
        current.next = node;
    }
}

node.append(2);
node.append(0);
node.append(-4);

console.log(node);


console.log(hasCycle([3,2,0,-4], 1));