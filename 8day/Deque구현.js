//생성자
function Deque(array = []){
    this.array = array;
};

//getBuffer() : 객체 내 데이터 반환
Deque.prototype.getBuffer = function(){
    return this.array.slice();
};

//isEmpty(): 비어있는 지
Deque.prototype.isEmpty = function(){
    return this.array.length === 0;
};

//pushFront() : unshift(x) x를 앞에 집어넣음
Deque.prototype.pushFront = function(x){
    return this.array.unshift(x);
};

//popFront() : 앞쪽 데이터 삭제
Deque.prototype.popFront = function(){
    return this.array.shift();
};

//pushBack() : 뒤쪽 데이터 추가
Deque.prototype.pushBack = function(x){
    return this.array.push(x);
};

//popBack() : 뒤쪽 데이터 삭제
Deque.prototype.popBack = function(){
    return this.array.pop();
};

//front() : 가장 첫 데이터 반환
Deque.prototype.front =function(){
    return this.array.length === 0 ? undefined : this.array[0];
};

//back() : 가장 끝 데이터 반환
Deque.prototype.back = function(){
    return this.array.length === 0 ? undefined : this.array[this.array.length-1];
};

//size() : Queue 내 데이터 개수 확인
Deque.prototype.size = function(){
    return this.array.length;
};

//clear() : 데크 초기화
Deque.prototype.clear = function(){
    this.array = [];
};


let dq = new Deque([1,2,3]);

console.log(dq);
dq.pushFront(0);
dq.pushBack(4);
console.log(dq.popFront());
dq.popBack();