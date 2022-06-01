/* 달팽이 만들기 */

/* user code */
function answer(length) {
    let result = [];
  
    // 코드 구현 시작 영역

    for(let i = 0; i<length; i++){
        result[i] = [];
    }

    let x = -1;
    let y = 0;
    let num = 0;
    let direction = 1;

    while(1) {
        for(let i = 0; i<length; i++){
            x += direction;
            result[y][x] = ++num;
        };

        length--;

        for(let i = 0; i<length; i++){
            y += direction;
            result[y][x] = ++num;
        };

        direction *= -1;
        if(length ==0 ) break;
            
    }
  
    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    3,
  
    // TC: 2
    5,
  
    // TC: 3
    6,
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }
  

