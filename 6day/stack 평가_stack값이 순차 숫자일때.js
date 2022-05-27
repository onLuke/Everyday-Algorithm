/* 기차 운행 */
if(! Array.prototype.peak){
    Array.prototype.peak = function(){
        return this[this.length-1];
    };
}

if(! Array.prototype.isEmpty){
    Array.prototype.isEmpty = function(){
        return this.length === 0;
    }
};

/* user code */
function answer(train) {
    // 코드 구현 시작 영역
    let stack = [],
    num = 0;

    for(let i = 0 ; i < train.length; i++){
        while(stack.isEmpty() || stack.peak() < train[i]){
            stack.push(++num);
        };

        if(stack.peak() === train[i]){
            stack.pop();
        }else {
            return false;
        }
        
    }
    
    return true;

    // 코드 구현 종료 영역
  }
  
  /* main code */
  let input = [
    // TC: 1
    [1, 2, 3],
  
    // TC: 2
    [3, 2, 1],
  
    // TC: 3
    [3, 1, 2],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }
  