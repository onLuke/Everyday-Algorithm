const DEFAULT_SIZE = 5;
//size 값을 입력하지 않았을 시 기본값. 이후, clear메서드에서도 사용하므로 상수로 선언함.

//생성자
function CircularQueue(array = [], size = DEFAULT_SIZE){
    this.array = array;
    this.size = array.length > size ? array.length : size;
    this.length = array.length;
    this.head = 0;
    this.tail = array.length;
};


//getBuffer() : 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function(){
    return this.array.slice();
};

//isEmpty() : 데이터가 없는 지 확인
CircularQueue.prototype.isEmpty = function(){
    return this.length === 0;
};

//isFull() : 데이터가 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function(){
    return this.length == this.size;
};

//enqueue() : 데이터 추가
CircularQueue.prototype.enqueue = function(element){
    if (this.isFull()) return false;

    this.array[this.tail] = element;
    this.tail = (this.tail + 1) % this.size;
    this.length++;

    return true;
};

//dequeue() : 데이터 삭제
CircularQueue.prototype.dequeue = function(){
    if(this.isEmpty()) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head];
    this.head = (this.head + 1) % this.size;
    this.length--;

    return element;
};

//front() : 가장 첫 데이터 반환
CircularQueue.prototype.front = function(){
    return this.length == 0 ? undefined : this.array[this.head];
};

//datasize() : size() 속성을 생성자에서 이미 쓰고 있기 떄문에 다른 이름으로 생성
CircularQueue.prototype.datasize = function(){
    return this.length;
};

//clear() : 큐 초기화시키며, 매개변수로 넣은 값 만큼 size를 변화시킨다.
CircularQueue.prototype.clear = function(size = DEFAULT_SIZE) {
    this.array = [];
    this.size = size;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
};

let cq = new CircularQueue([1,2,3,4]);

cq.enqueue(5);
cq.enqueue(6);

console.log(cq);

console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
console.log(cq.front());

console.log(cq.datasize());

