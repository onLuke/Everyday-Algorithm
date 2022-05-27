/* 접시 꺼내기 */
if(! Array.prototype.isEmpty){
    Array.prototype.isEmpty = function(){
        return this.length === 0;
    }
};

if(! Array.prototype.peak){
    Array.prototype.peak = function(){
        return this[this.length-1];
    }
};


/* user code */
function answer(str) {
    let result = [];
  
    // 코드 구현 시작 영역
  
    let toBeStacked = str.split("").sort().join("");
    
    let stack = [],
    index = 0;

    for(i = 0; i<str.length; i++){
        while(stack.isEmpty() || stack.peak() < str[i]){
            stack.push(toBeStacked[index++]);
            result.push(0);
        }

        if(stack.peak() === str[i]){
            stack.pop();
            result.push(1);
        }else {
            return [];
        }
    };
  
    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    "bacd",
  
    // TC: 2
    "dabc",
  
    // TC: 3
    "edcfgbijha",
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }
  