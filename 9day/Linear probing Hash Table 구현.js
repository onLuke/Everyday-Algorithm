//hashtable 의 크기/ 소수로 지정해야 충돌 가능성이 적다.
const HASH_SIZE = 5; // 예시에서는 충돌 빈도 증가를 위해 작게 설정

//Element() : key, value 저장을 위한 생성자
function Element(key, value){
    this.key = key;
    this.value = value;
};

//HashTable() : 생성자
function LinearHashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

LinearHashTable.prototype.hashCode = function(key){
    let hash = 0; 
    for(let i = 0; i<key.length; i++){
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

//put() : 데이터 추가
LinearHashTable.prototype.put =function(key, value){
    let index = this.hashCode(key),
    startIndex = index;
    console.log(`key: ${key}, index: ${index}`);

    do{
        if(this.table[index] === undefined){
            this.table[index] = new Element(key,value);
            this.length++;
            return true;
        }

        index = (index + 1) % HASH_SIZE;
    }while(index !== startIndex);

    return false;
};

//get() : 데이터 조회
LinearHashTable.prototype.get = function(key){
    let index = this.hashCode(key),
    startIndex = index;

    do{
        if(this.table[index] !== undefined && this.table[index].key === key){
            return this.table[index].value;
        }

        index = (index+1) % HASH_SIZE;
    }while(index !== startIndex);

    return undefined;
};


//clear() : 초기화, 생성자와 같음
LinearHashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

//size() : 크기 반환
LinearHashTable.prototype.size = function(){
    return this.length; //array사이즈가 아니라 그동안 추가될 때 마다 ++ 된 length 속성값을 반환
};

//getBuffer() : 데이터 셋 반환
LinearHashTable.prototype.getBuffer = function(){
    let array = [];
    for(let i = 0; i < this.table.length; i++){
        if(this.table[i]){
            array.push(this.table[i]);
        }
    }
    return array;
};

//print() : 데이터 셋 key: vale 형태로 출력
LinearHashTable.prototype.print = function(){
    for(let i = 0; i < this.table.length; i++){
        if(this.table[i]){
            console.log(`${i} -> ${this.table[i].key}: ${this.table[i].value}`)
        }
    }
};

//remove() : 데이터 삭제
LinearHashTable.prototype.remove = function(key){
    let index = this.hashCode(key),
    startIndex = index;

    do{
        if(this.table[index] !== undefined && this.table[index].key === key){
            let element = this.table[index];
            delete this.table[index];
            this.length--;

            return element;
        }

        index = (index+1) % HASH_SIZE;
    }while(index !== startIndex);

    return undefined;
};




let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 181);
lht.put("Donnie", 179);
lht.put("Mindy", 190);
lht.put("Paul", 168)
console.log("");

console.log(lht.remove("Ana"));
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));
console.log(lht.get("Paul"));

lht.print();