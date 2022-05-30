/* 백신 접종 */

/* user code */
function Element(key, value) {
    this.key = key;
    this.value = value;
  }
  
  function HashTable(size) {
    this.size = size;
    this.table = new Array(this.size);
    this.length = 0;
  }
  
  HashTable.prototype.hashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  };
  
  HashTable.prototype.put = function (key) {
    let index = this.hashCode(key);
    // 코드 구현 시작 영역
    
    let startIndex = index;

    do{
        if(this.table[index] === undefined){
            this.table[index] = new Element(key, index+1)
            this.length++;
            return true;
        }

        index = (index+1) % this.size;
    }while(index !== startIndex)
  
    return false;
    // 코드 구현 종료 영역
  };
  
  HashTable.prototype.get = function (key) {
    let index = this.hashCode(key);
    // 코드 구현 시작 영역
  
    let startIndex = index;

    if(this.table[index] === undefined){
        return undefined;
    }


    do{
        if(this.table[index] !== undefined && this.table[index].key === key){
            return this.table[index].value;
        }
        
        index = (index+1) % this.size;
    }while(index !== startIndex)
  

    return undefined;
    // 코드 구현 종료 영역
  };
  
  /* user code */
  function answer(name) {
    let result = [];
  
    let ht = new HashTable(name.length);
    // 코드 구현 시작 영역
  
    // 1. for loop: push

    for(element of name){
        ht.put(element);
    };
  
    // 2. for loop: get
    
    for(element of name){
        result.push(ht.get(element));
    };

    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    ["Mana", "Naomi", "Lelia", "Morris", "Madonna"],
  
    // TC: 2
    ["Oliver", "Mabel", "Nero", "Rei", "Kara", "Jordan", "Nami"],
  
    // TC: 3
    [
      "Ruby",
      "Robin",
      "Jordan",
      "Kori",
      "Rei",
      "Madonna",
      "Justin",
      "Maya",
      "Lakia",
      "Kali",
    ],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }
  