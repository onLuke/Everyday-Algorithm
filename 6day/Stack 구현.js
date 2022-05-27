//Stack() 생성자 함수

function Stack(array) {
    this.array = array ? array : [];
}


//getBuffer() : 객체 내 데이터 셋 반환 => deepcopy
Stack.prototype.getBuffer = function(){
    return this.array.slice();
};

//isEmpty() : 객체 내 데이터가 있는 지
Stack.prototype.isEmpty = function(){
    return this.array.length ===0;
};

//push()
Stack.prototype.push = function(element) {
    return this.array.push(element);
};

//pop()
Stack.prototype.pop = function(){
    return this.array.pop();
};

//peak() : 가장 끝 데이터 반환 - 삭제는 하지 않음
Stack.prototype.peak = function(){
    return this.array[this.array.length-1];
};

//size() 스택 내 데이터 개수 확인
Stack.prototype.size = function(){
    return this.array.length;
};

//indexOf() position 부터 매개변수의 위치를 찾아 반환, 
//기존 배열의 Array.indexOf() 메서드를 사용해도 된다.
Stack.prototype.indexOf = function(value, position = 0){
    for(let i = position; i< this.array.length; i++){
        if(value === this.array[i]) return i;
    }
    return -1;
};

//includes() 데이터 존재 여부 확인, 
//이것도 배열의 includes() 메서드를 써도 됨.
Stack.prototype.includes = function(value, position = 0){
    for(let i = position; i < this.array.length; i++){
        if(value === this.array[i]) return true;
    }
    return false;
};

console.log(new Stack([1,2,3]).indexOf(1,1));