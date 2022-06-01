/* 대표 선출 */


function CircularQueue(array = [], size){
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
};

CircularQueue.prototype.enqueue = function(element){
  if(this.array.length == this.size) return false;

  this.array[this.tail] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;

  return true;
};

CircularQueue.prototype.returnDequeued = function(start, step){
  if(this.array.length == 0) return undefined;

  let res = [];

  while(this.size != 0){
    res.push(this.array[start]);
    this.array.splice(start, 1);
    this.size--;
    start = (start + step) % this.size;
  };



  return res;
};




/* user code */
function answer(n, m, k) {
    let result = [];
  
    // 코드 구현 시작 영역
    let circularqueue = new CircularQueue([],n);

    for(let i = 1; i<=n; i++){
      circularqueue.enqueue(i);
    };

    result = circularqueue.returnDequeued(m-1,k-1);
    
  
    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [8, 2, 3],
  
    // TC: 2
    [10, 2, 3],
  
    // TC: 3
    [20, 5, 7],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1], input[i][2]));
  }
  