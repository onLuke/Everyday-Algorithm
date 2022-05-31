import { LinkedList } from "./Linked List.mjs";

const HASH_SIZE = 37;

//Element() : key, value 저장을 위한 생성자
function Element(key,value){
    this.key = key;
    this.value = value;
};

//ChainingHashTable() : 체이닝 해시테이블 생성자
function ChainingHashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

//hashCode() : 해시함수 (loose loose hash function)
ChainingHashTable.prototype.hashCode = function(key){
    let hash = 0;
    for (let i = 0; i < key.length ; i++){
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

//clear() : 초기화
ChainingHashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

//size() : 크기 반환
ChainingHashTable.prototype.size = function(){
    return this.length;
    //cht객체에 저장된 length 속성의 값을 호출함. Array.length가 아님
};

//put() : 데이터 추가
ChainingHashTable.prototype.put =function(key, value){
    let index = this.hashCode(key);

    
    if(this.table[index] === undefined){
        this.table[index] = new LinkedList();
    }

    this.table[index].append(new Element(key, value));
    this.length++;

    return true;
};

//getBuffer(): 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function(){
    let array = [];
    for(let i = 0; i < this.table.length; i++){
        if(this.table[i]){
            let current = this.table[i].head;
            do{
                array.push(current.data);
                current = current.next;
            }while(current);
        }
    }
    return array;
};

//print(): 데이터 셋 출력
ChainingHashTable.prototype.print = function(){
    for(let i = 0; i<this.table.length; i++){
        //this.length값은 Linked LIst로 들어간 데이터를 포함한 길이,
        //print에서는 index에 값이 있다면 각각 탐색해서 모두 반환할 것이므로 this.table.length를 쓴다
        if(this.table[i]){
            let current = this.table[i].head;
            process.stdout.write(`#${i}`);
            do{
                process.stdout.write(` -> ${current.data.key}: ${current.data.value} `);
                current = current.next;
            }while(current)

            console.log("");
        }
    }
};


//get(): Key값으로 데이터 조회
ChainingHashTable.prototype.get = function(key){
    let index = this.hashCode(key);

    if(this.table[index] !== undefined && !this.table[index].isEmpty()){
        let current = this.table[index].head;

        do{
            if(current.data.key === key){
                return current.data.value;
            }
            current = current.next;
        }while(current);
    }

    return undefined;
};

//remove() : 매개변수 Key에 해당하는 데이터 삭제
ChainingHashTable.prototype.remove = function(key){
    let index = this.hashCode(key);
    let element = undefined; //일치하는 key값을 못 찾으면 undefined 반환을 위해서 선언

    if(this.table[index] !== undefined){
        let current = this.table[index].head;

        do{
            if(current.data.key === key){
                element = current.data;
                this.table[index].remove(current.data);
                if(this.table[index].isEmpty()){
                    //remove 한 후 table[index]에 아무것도 없으면,
                    delete this.table[index];
                    //그 table[index]를 비운다.
                }
            }
            current = current.next;
            //current.data.key 가 매개변수와 일치하지 않으면, current.next를 탐색
        }while(current);
        //current가 null이면 멈춤
    }
    this.length--;
    //cht 객체의 length 1감소
    return element;
    //삭제 성공하면 current.data 즉 삭제한 데이터를 반환,
    //삭제 실패하면 초기 설정한 undefined 반환

};

let cht = new ChainingHashTable();


cht.put("Ana", 172);
cht.put("Donnie", 172);
cht.put("Sue", 172);
cht.put("Jamie", 172);
cht.put("Paul", 172); 





console.log(cht.remove("Sue"));
console.log("");
cht.print();
console.log("");

console.log(cht.remove("Jamie"));
console.log("");
cht.print(); 
console.log("");
