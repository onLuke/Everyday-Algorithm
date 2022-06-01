/* 괄호 계산 */

/* user code */
function answer(str) {
    let result = 0;
  
    // 코드 구현 시작 영역
    
    let stack = [],
    temp = 1;

    for(i = 0; i<str.length; i++){
        let mark = str[i];

        switch (mark){
            case "(":
                temp *= 2;
                stack.push(mark);
                break;

            case "[":
                temp *= 3;
                stack.push(mark);
                break;

            case ")":
                if(stack.length == 0 || stack[stack.length-1] != "("){
                    return 0;
                }

                if(str[i-1] == "("){
                    result += temp;
                }
                temp /= 2;
                stack.pop();
                break;
                
            case "]":
                if(stack.length == 0 || stack[stack.length-1] != "["){
                    return 0;
                }

                if(str[i-1] == "["){
                    result += temp;
                }
                temp /= 3;
                stack.pop();
                break;
        };

    };

    if(stack.length != 0){
        result = 0;
         
    }
    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    "(()[[]])",
  
    // TC: 2
    "[][]((])",
  
    // TC: 3
    "(()[[]])([])",
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }
  