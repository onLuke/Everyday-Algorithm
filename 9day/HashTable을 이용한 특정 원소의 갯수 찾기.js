/* 숫자 카드 */

const HASH_SIZE = 21;

function HashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

HashTable.prototype.hashCode = function(key){
    return (key+10) % HASH_SIZE; 
    // 원소 값의 범위가 정해져 있다면, 그 최소값이 0, 최대값이 HASH_SIZE-1 이 되게 만들고
    // hashCode return값으로 지정하면, 충돌없이 HashTable을 구현할 수 있다.
};

HashTable.prototype.put = function(key){

    let index = this.hashCode(key);
    if(this.table[index] === undefined){
        this.table[index] = 0;
    }
    this.table[index]++;
};

HashTable.prototype.get = function(key){
    let index = this.hashCode(key);
    return this.table[index] === undefined ? 0 : this.table[index];
};


/* user code */
function answer(card, select) {
    let result = [];
  
    // 코드 구현 시작 영역
  
    let ht = new HashTable();

    for(item of card){
        ht.put(item);
    };

    //console.log(lht);

    for(item2 of select){
        result.push(ht.get(item2));
    };

    
    
  
    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [
      [-6, -1, 6, 1, 1],
      [-2, 1, 3],
    ],
  
    // TC: 2
    [
      [7, 4, 3, 10, 10, 10, -10, -10, 7, 3],
      [10, 9, -5, 4, 6, -10],
    ],
  
    // TC: 3
    [
      [5, -3, -7, 10, -3, 4, 8, 4, -3, 3, 8, -2, -9, -8, -1],
      [4, 5, 1, 10, -2, -3, 3, -8],
    ],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
  }
  