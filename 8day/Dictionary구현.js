//Dictionary 생성자
function Dictionary(items = {}){
    this.items = items;
};

//getBuffer() : 모든 개체(entity) 반환
Dictionary.prototype.getBuffer = function(){
    return {...this.items}; //items에 들어 간 entity를 각각 반환
};

//clear() : 초기화
Dictionary.prototype.clear = function(){
    this.items = {};
};

//size() : 크기 반환
Dictionary.prototype.size = function(){
    return Object.keys(this.items).length;
};

//has() : 개체 존재 여부 확인(key정보를 배열로 반환)
Dictionary.prototype.has = function(key){
    //return key in this.items;
    return this.items.hasOwnProperty(key);
};

//set() : 개체(entity) 추가
Dictionary.prototype.set = function(key, value){
    this.items[key] = value;
};

//get() : 개체(entity)의 value 반환
Dictionary.prototype.get = function(key){
    return this.has(key) ? this.items[key] : undefined;
};

//remove() : 개체(entity) 삭제
Dictionary.prototype.remove = function(key){
    if(this.has(key)){
        delete this.items[key];
        return true;
    }

    return false;
};

//keys() : 모든 key 값을 배열 형태로 반환
Dictionary.prototype.keys = function(){
    return Object.keys(this.items);
};

//values() : 모든 value값을 배열 형태로 반환
Dictionary.prototype.values = function(){
    return Object.values(this.items);
};


//each(fn) : 객체에서 쓸 수 있는 forEach
Dictionary.prototype.each =function(fn){
    for(let k in this.items){
        fn(k, this.items[k]);
    }
};

//printDictionary() : key, value를 log로 반환
function printDictionary(key, value){
    console.log(`key: ${key}`)
    console.log(`value: ${value}`)
};


