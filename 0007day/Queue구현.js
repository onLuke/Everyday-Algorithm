//Queue() 생성자
function Queue(array){
    this.array = array ? array : [];
    this.tail = array ? array.length : 0;
    this.head = 0;
}


//getBuffer() : 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function(){
    return this.array.slice();
}

//isEmpty() : 빈 객체인 지 아닌지
Queue.prototype.isEmpty = function(){
    return this.array.length === 0;
};

//enqueue(x) : 데이터 추가
Queue.prototype.enqueue = function(element){
    //return this.array.push(element)
    return (this.array[this.tail++] = element)
};

//dequeue1() : 데이터 삭제, 코드가 간결하나 소요 시간이 많이 걸린다.
Queue.prototype.dequeue1 = function(){
    return this.array.shift();
}

//dequeue2() : 데이터 삭제, 가장 효율적이지만, 배열의 길이가 변하지 않는다.
Queue.prototype.dequeue2 = function(){
    if(this.tail === this.head) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;
};

//dequeue3() : 데이터 삭제, 단 return값이 배열
Queue.prototype.dequeue3 = function(){
    if(!this.array.length) {
        return undefined
    }
    return this.array.splice(0,1);
};

//front() : 가장 첫 데이터 반환
Queue.prototype.front = function(){
    return this.array.length === 0 ? undefined : this.array[0];
};

//size() : Queue 데이터 개수 확인
Queue.prototype.size = function(){
    return this.array.length;
};

//clear() : 큐 초기화
Queue.prototype.clear = function() {
    this.array = [];
};



let queue = new Queue([1,2,3]);

console.log(queue.enqueue(4));