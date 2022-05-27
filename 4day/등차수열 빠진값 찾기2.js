/* 등차수열 빠진값 찾기 */

/* user code */
function answer(a, b, c) {
    let number = 0;

   // 코드 구현 시작 영역

    // sort
    num = [a, b, c];
    num.sort((x, y) => x - y);
  
    let d = 0;
  
    //등차값을 찾고,
    for(i =1; i<num.length; i++){
      d += num[i] - num[i-1];
    };
    d /= num.length;

  
    //등차값이 일치하지 않는 원소를 찾아 number에 대입
    num.forEach((el, index, array) => {
      if(array[index+1]-el != d && index !== num.length-1){
        //등차값이 일치하지 않으면서 마지막 원소가 아닌 값을 찾는다
        number = el+d;
      }
    })
  
  
    // 코드 구현 종료 영역
  
    return number;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [1, 7, 10],
  
    // TC: 2
    [3, 8, 18],
  
    // TC: 3
    [2, 5, 11],
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
  }
  
  