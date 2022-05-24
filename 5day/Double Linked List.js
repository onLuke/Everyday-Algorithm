//Node() : Node 생성자 함수
function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoubledLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoubledLinkedList.prototype.size = function() {
    return this.length;
};

DoubledLinkedList.prototype.isEmpty = function() {
    return this.length ===0;
};


//printNode()
DoubledLinkedList.prototype.printNode = function() {
    process.stdout.write(`head -> `)
    for(let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} -> `)
    }
    console.log("null");
}

//printNodeInverse() : 거꾸로 tail부터 출력
DoubledLinkedList.prototype.printNodeInverse = function() {
    let temp = [];

    process.stdout.write(`null <- `)
    for(let node = this.tail; node != null; node = node.prev){
        temp.push(node.data);
    }
    for(let i = temp.length-1; i >=0; i--){
        process.stdout.write(`${temp[i]} <- `)
    }
    console.log("tail");
};


//apend(value) = Node를 끝에 추가
DoubledLinkedList.prototype.append = function(value) {
    let node = new Node(value);

    if(this.head === null){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    this.length++;
};

// insert() : position 위치에 Node 추가

DoubledLinkedList.prototype.insert = function(value, position = 0){
    if(position < 0 || position > this.length){
        return false;
    }

    let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

    if(position === 0){
        if(this.head === null){
            this.head = node;
            this.tail = node;
        } else{
            node.next = current;
            current.prev = node;
            this.head = node;
        }
    } else if ( position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;
        current.prev = node;
        node.prev = prev;
    }

    this.length++;

    return true;
};


DoubledLinkedList.prototype.remove = function(value) {
    let current = this.head,
    prev = current;

    while( current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }

    if(current.data != value){
        return null;
    }

    if(current === this.head){
        this.head = current.next;
        if (this.length === 1 ) this.tail = null;
        else this.head.prev = null;
    }else if (current === this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
    }else {
        prev.next = current.next;
        current.next.prev = prev;
    }

    this.length--;

    return current.data;
};

DoubledLinkedList.prototype.removeAt = function(position = 0) {
    if(position < 0 || position >= this.length) {
        return null;
    }

    let current = this.head,
    index =0,
    prev;

    if(position === 0) {
        this.head = current.next;
        if(this.length === 1) this.tail = null;
        else this.head.prev = null;
    }else if (position === this.length - 1){
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
    }else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
        current.next.prev = prev;
    }

    this.length--;

    return current.data;
};


//indexOf(value) : value값을 가진 노드의 위치 반환

DoubledLinkedList.prototype.indexOf = function(value) {
    let current = this.head,
    index =0;

    while(current != null) {
        if(current.data === value) {
            return index;
        }

        index++;
        current = current.next;
    }

    return -1;
};

//delete() : indexOf + removeAt
DoubledLinkedList.prototype.delete = function(value) {
    let index = this.indexOf(value);
    return this.removeAt(index);
};



let dll = new DoubledLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2,1);
dll.insert(3,3);

dll.printNodeInverse();
dll.printNode();