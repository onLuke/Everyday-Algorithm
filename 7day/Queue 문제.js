/* 카드 뽑기 */

function Queue(array){
    this.array = array ? array : [];
    this.head = 0;
    this.tail = array ? array.length : 0;
};

Queue.prototype.enqueue = function(element){
    this.array[this.tail++] = element;
    return this.array.length;
};

Queue.prototype.dequeue = function(){
    if(this.tail === this.head){
        return undefined;
    }

    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;
};

Queue.prototype.dequeueAndEnqueue = function(){
    this.enqueue(this.dequeue());
};

/* user code */
function answer(n) {
    let result = [];
  
    // 코드 구현 시작 영역
  /* 
    let arr = [];

    for(let i = 0; i<n; i++){
        arr[i] = i+1;
    };

    let shifted;

    while(arr.length > 1){
        result.push(arr.shift());
        shifted = arr.shift();
        arr.push(shifted);
    };

    result.push(arr[0]);
     */

    let arr = [];

    for(let i = 0; i < n; i++){
        arr[i] = i+1;
    };

    let queue = new Queue(arr),
    idx = 0;


    while(queue.tail > queue.head+1){
        result[idx++] = queue.dequeue();
        queue.dequeueAndEnqueue();
    };

    result[idx] = queue.array[queue.tail-1];

 
    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    4,
  
    // TC: 2
    7,
  
    // TC: 3
    10,
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }
  