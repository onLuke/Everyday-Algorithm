/* 2. 잃어버린 카드 찾기 */

/* user code */
function answer(arr) {
    let number = 0;
  

    num = [...arr];
    num.sort((x, y) => x-y);
    console.log(num);
  
    // 코드 구현 시작 영역

    let len = num.length;
    let differecial = 0;

    for(i =1; i<num.length; i++){
      differecial += num[i] - num[i-1];
      
    };

    
    differecial /= len;

    console.log(differecial);

    function recursive(num, len, differecial, res = num[len-1] - differecial){
        if(! num.includes(res)){
            return res;
        }
        num[len-1] = res;
        return recursive(num, len, differecial)
    }

    number = recursive(num, len, differecial);
  
    // 코드 구현 종료 영역
  
    return number;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [1, 7, 10, 13],
  
    // TC: 2 3, 8, 13, 18, 23
    [3, 8, 23, 18],
  
    // TC: 3
    [2, 5, 11, 14, 17, 20, 23],
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
  }
  
  