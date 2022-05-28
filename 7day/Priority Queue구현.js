//Element() : 데이터와 우선순위를 같이 저장하기 위한 생성자 함수
function Element(data, priority){
    this.data = data;
    this.priority = priority;
};

//PriorityQueue() : Element 관리를 위한 생성자 함수
function PriorityQueue(){
    this.array = [];
    this.head = 0;
};

//getBuffer() : map을 이용해서 Element객체 중 data만 반환
PriorityQueue.prototype.getBuffer = function(){
    return this.array.map(el => el.data);
};

//isEmpty() : 객체 내 데이터 존재 여부 확인
PriorityQueue.prototype.isEmpty = function(){
    return this.array.length === 0;
};

//enqueue() : priority 우선 순위가 같은 data중 가장 끝에 push
PriorityQueue.prototype.enqueue = function(data, priority){
    let element = new Element(data, priority);
    let added = false; //데이터가 더해졌는 지 여부 판단

    for(let i = 0; i < this.array.length; i++){
        if(element.priority < this.array[i].priority){
            this.array.splice(i, 0, element);
            added = true;
            break;
        }
    }

    if(!added){
        this.array.push(element);
    }



    return this.array.length;
};


// dequeue() : 데이터 삭제
PriorityQueue.prototype.dequeue = function() {
    if(this.array.length === 0) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;

};

//front() : 가장 첫 데이터 반환
PriorityQueue.prototype.front = function() {
    return this.array.length == 0 ? undefined : this.array[0].data;
};

//size() : data 개수 반환
PriorityQueue.prototype.size = function() {
    return this.array.length;
};

PriorityQueue.prototype.clear = function() {
    this.array = [];
};

let pq = new PriorityQueue();

pq.enqueue("Alice",1);
pq.enqueue("Bob", 2);

pq.enqueue("Tom",1);
pq.enqueue("John",3);

console.log(pq.dequeue());

console.log(pq);
