//hashtable 의 크기/ 소수로 지정해야 충돌 가능성이 적다.
const HASH_SIZE = 1013;

//Element() : key, value 저장을 위한 생성자
function Element(key, value){
    this.key = key;
    this.value = value;
};

//HashTable() : 생성자
function HashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

//hashCode() : 해시 함수 djb2/ HASH_SIZE = 1013; 초기 hash값(seed값) = 5381;
//hash size와 seed값, 내부 연산 작업에서 쓰이는 값이 모두 소수여야 충돌 횟수가 적다.
//균등하게 index 분포가 이뤄지는 해시 함수가 좋은 해시함수이다.
HashTable.prototype.hashCode = function(key){
    //djb2 hash function
    let hash = 5381; //충돌 방지를 위한 seed값 추가
    for(let i = 0; i<key.length; i++){
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

//put() : 데이터 추가
HashTable.prototype.put =function(key, value){
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if(this.table[index] !== undefined){
        return false;
    }

    this.table[index] = new Element(key, value);
    this.length++;

    return true;
};

//get() : 데이터 조회
HashTable.prototype.get = function(key){
    return this.table[this.hashCode(key)];
};

//remove(): 데이터 삭제
HashTable.prototype.remove = function(key){
    let element = this.table[this.hashCode(key)];

    if(element !== undefined){
        delete this.table[this.hashCode(key)];
        this.length--;
    }

    return element;
};

//clear() : 초기화, 생성자와 같음
HashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

//size() : 크기 반환
HashTable.prototype.size = function(){
    return this.length; //array사이즈가 아니라 그동안 추가될 때 마다 ++ 된 length 속성값을 반환
};

//getBuffer() : 데이터 셋 반환
HashTable.prototype.getBuffer = function(){
    let array = [];
    for(let i = 0; i < this.table.length; i++){
        if(this.table[i]){
            array.push(this.table[i]);
        }
    }
    return array;
};

//print() : 데이터 셋 key: vale 형태로 출력
HashTable.prototype.print = function(){
    for(let i = 0; i < this.table.length; i++){
        if(this.table[i]){
            console.log(`${i} -> ${this.table[i].key}: ${this.table[i].value}`)
        }
    }
};





let ht = new HashTable();
ht.put("Ana", 1);
ht.put("Brian", 2);
ht.put("Mike", 5);
console.log(ht.get("Ana"));
console.log(ht.getBuffer());
ht.print();